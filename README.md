# Unext

[![Build Status](https://travis-ci.org/Flcwl/unext.svg?branch=master)](https://travis-ci.org/github/Flcwl/unext)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Flcwl/unext/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/unext.svg?style=flat)](https://www.npmjs.com/package/unext)

> A modern web utils collection using esnext.

## Getting Started

### Installation

```console
npm install --save duration-pretty
```

### Documentation

The `duration(timestamp, type)` get two parameters: timestamp && type.

```js
timestamp: number
type: seconds | milliseconds
```

Format duration time using a template string to `format()`.

```js
var { duration } = require('duration-pretty')

duration(7380, 'seconds').format('H:mm') // "2:03"
duration(36610000333, 'milliseconds').format('Y:MM:DD:HH:mm:ss:SSS') // "1:01:28:17:26:40:333"
```

or using ES6 Module:

```js
import { duration } from 'duration-pretty'

duration(7380, 'seconds').format('H:mm') // "2:03"
```

## Tests

You can find all cases in `files:/test/*.spec.js`, And testing Using below script.

```console
npm run test
```
