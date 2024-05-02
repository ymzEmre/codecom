const fs = require('fs')
const findCodeBlocks = require('./findCodeBlocks')

const projectDirectory = 'src'
const codeBlocks = findCodeBlocks(projectDirectory)

codeBlocks.forEach((block, index) => {
  const codeReport = {
    'execution-time': block.executionTime + ' ms',
    directory: block.filePath,
    'start-line': block.startLine,
    'end-line': block.endLine,
  }

  console.table([codeReport])
})

let htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Codecom - test results</title>
  <style>
    .codeContainer {
      border: 1px solid #ccc;
      padding: 0 1rem;
      margin: 1rem 0;
    }
    .codeBlock {
      display: block;
      padding: 1rem;
      background-color: #f4f4f4;
      border-left: 3px solid #ccc;
      margin: 1rem 0;
      overflow-x: auto;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <h3>Codecom - test results</h3>
  ${codeBlocks
    .map((block, index) => {
      return `
        <div class="codeContainer">
          <p><b>index</b>: ${index}</p>
          <details>
            <summary><b>code</b></summary>
            <pre class="codeBlock"><code>${block.code}</code></pre>
          </details>
          <p><b>execution-time:</b> ${block.executionTime} ms</p>
          <p><b>directory:</b> ${block.filePath}</p>
          <p><b>start-line:</b> ${block.startLine}</p>
          <p><b>end-line:</b> ${block.endLine}</p>
        </div>
        `
    })
    .join(' ')}
</body>
</html>
`
fs.writeFileSync('codecom.html', htmlContent)

export default codeBlocks