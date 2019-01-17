[![npm version](https://badge.fury.io/js/plny.svg)](https://badge.fury.io/js/plny)
[![Build Status](https://travis-ci.org/zdanowiczkonrad/plny.svg?branch=master)](https://travis-ci.org/zdanowiczkonrad/plny)

# Tiny price formatter for Polish Zloty (PLN) 🇵🇱


## Installation

```
npm i plny
```

## Usage

```js
const { format } = require('plny');

format(29999.99);
// '29 999,95 zł'
```

## Options

All formatting options from [`number-currency-format`](https://github.com/zdanowiczkonrad/number-currency-format) are allowed.

Example: 
```js
format(29999.99, {
    currency: 'PLN',
    showDecimals: 'NEVER'
}
// '30 000 PLN'
```