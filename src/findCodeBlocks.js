import fs from 'fs'
import path from 'path'
import processCodeBlocks from './processCodeBlocks.js'

const findCodeBlocks = (directoryPath) => {
  const codeBlocks = []

  try {
    const files = fs.readdirSync(directoryPath)

    for (const file of files) {
      const filePath = path.join(directoryPath, file)
      if (fs.statSync(filePath).isDirectory()) {
        const subDirectoryCodeBlocks = findCodeBlocks(filePath)
        codeBlocks.push(...subDirectoryCodeBlocks)
      } else {
        const content = fs.readFileSync(filePath, 'utf-8')
        const lines = content.split('\n')

        let insideBlock = false
        let blockStartLine = null
        let blockLines = []

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim()

          if (line.startsWith('// _start()') || line.startsWith('//_start()')) {
            insideBlock = true
            blockStartLine = i + 2
          }

          if (insideBlock) {
            blockLines.push(line)
          }

          if (line.endsWith('// _end()') || line.endsWith('//_end()')) {
            insideBlock = false
            if (blockLines.length > 1) {
              const blockEndLine = i
              const { codeBlock, executionTime } = processCodeBlocks(blockLines)

              codeBlocks.push({
                filePath,
                startLine: blockStartLine,
                endLine: blockEndLine,
                code: codeBlock,
                executionTime: executionTime,
              })
            }
            blockLines = []
          }
        }
      }
    }

    return codeBlocks
  } catch (err) {
    console.error('err:', err)
    return []
  }
}

export default findCodeBlocks
