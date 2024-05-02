# Codecom

## Table of Contents

- [Introduction](#introduction)
- [Motivation](#motivation)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#mit-license)

## Introduction

Codecom, is being developed to measure the execution times of JavaScript codes and to display the results both within the terminal and in an HTML file, allowing them to be viewed on a web page as well.

The name, comes from the words "Code" and "Competition".

## Motivation

When developing a software, usually, attention is not paid to the milisecond-level execution time of the code. However, in some cases;

- When the application will run on a device with limited resources,
- When evaluating and improving the performance of the code,
- When processing big data, deciding on the optimal solution method,
- When comparing the performance of different codes,
- When seeking to enhance the user experience by reducing the waiting time of the user.

In such cases, it is necessary to measure the execution time of the code and to compare the results.

Codecom, is developed to make this process easier and more enjoyable.

Try it now!

## Features

- leightweight [number]kb minified & gzipped
- No dependencies
- Easy to use
- No need to adjust initial configurations
- No magic, just simple use and effective.

## Installation

```
npm install codecom
```

Import the codecom library into your project's index file.

```JavaScript
import codecom from 'codecom'
```

#### or

Create `codemon.js` file and import the codecom library into it.

## Usage

To test code;

- Add the // \_start() code to the beginning of where your code's scope start.
- Add the // \_end() code to the end of where your code's scope end.

#### Example

```JavaScript
// _start()
for (let i = 0; i < 100000; i++) {
  console.log(i)
}
// _end()
```

#### Run

Add package.json file to your project and add the following code.

```JSON
"scripts": {
  "codecom": "node --watch codecom.js"
}
```

Run the following command in the terminal.

```bash
npm run codecom
```

#### Output

Results will be displayed in the terminal and in the `codecom.html` file.

**Terminal result**

![terminal](https://docs.google.com/uc?export=open&id=1gbaw-_zT1tSAYX0VET6r5NDDKDFQ1N2E)

**Browser result**

![browser](https://docs.google.com/uc?export=open&id=1ypxZLQ3_vAfXLc_QSNBl-TfkROOC5ziS)

## Contribution

I am open to contributions. Please feel free to open an issue or a pull request.

## License

Copyright (c) 2024 Emre Yilmaz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
