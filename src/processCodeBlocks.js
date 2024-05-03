const processCodeBlocks = (blockLines) => {
  const startTime = performance.now()

  const codeBlock = blockLines.slice(1, -1).join('\n')

  const endTime = performance.now()

  const executionTime = (endTime - startTime).toFixed(6)

  return { codeBlock, executionTime }
}

export default processCodeBlocks
