const fs = require('fs')
const findCodeBlocks = require('./findCodeBlocks')

const projectDirectory = 'src'
const codeBlocks = findCodeBlocks(projectDirectory)

codeBlocks.forEach((block, index) => {
  const codeReport = {
    directory: block.filePath,
    'start-line': block.startLine,
    'end-line': block.endLine,
    'execution-time': block.executionTime + ' ms',
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
  <title>codecom | Test Results</title>
</head>
<body>
  <h1>codecom | Test Results</h1>
  <ul>
    ${codeBlocks
      .map((block, index) => {
        return `<li>
        <h2>Kod Parçası ${index + 1}</h2>
        <p>Dosya: ${block.filePath}</p>
        <p>Başlangıç Satırı: ${block.startLine}</p>
        <p>Bitiş Satırı: ${block.endLine}</p>
        <pre><code>${block.code}</code></pre>
        <p>Çalışma Süresi: ${block.executionTime} ms</p>
      </li>`
      })
      .join('')}
  </ul>
</body>
</html>
`

fs.writeFileSync('test-codes.html', htmlContent)
