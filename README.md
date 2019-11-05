# mkcp

:open_file_folder: Node.js based, file and folder duplication utility.

[![Build Status](https://travis-ci.com/arakilian0/mkcp.svg?branch=master)](https://travis-ci.com/arakilian0/mkcp) [![npm version](https://img.shields.io/npm/v/mkcp.svg?style=flat)](https://www.npmjs.com/package/mkcp) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arakilian0/mkcp/blob/master/LICENSE.md)

## Install

##### For programmatic usage

```bash
npm install mkcp
```
##### For command line usage

```bash
npm install -g mkcp
```

## Usage

##### Programmatic

```js
const mkcp = require('mkcp');

mkcp('myfile.txt', 'newfolder'); // copy file
mkcp('myfolder', 'newfolder'); // copy directory
```
##### Command Line

```bash
mkcp myfile.txt newfolder
```

```bash
mkcp myfolder newfolder
```

## License

MIT License

Copyright (c) 2019 Michael Arakilian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
