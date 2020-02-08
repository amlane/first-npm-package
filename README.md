# @amlane/my-first-npm-package

[![npm (scoped)](https://img.shields.io/npm/v/@amlane/first-npm-package.svg)](https://github.com/amlane/my-first-npm-package)
![npm bundle size](https://img.shields.io/bundlephobia/min/@amlane/first-npm-package?label=minified%20size)

## Install

```
$ npm install @amlane/first-npm-package
```

## Usage

```
const greeting = require("@amlane/first-npm-package")

greeting("Amanda");
//=> "Hello, Amanda! 🌷"

greeting(1234);
//=> Uncaught TypeError: Greeting wants a string!
```
