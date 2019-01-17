# Minimal price formatter for Polish Zloty (PLN) 🇵🇱


## Installation

```
npm i plny
```

## Usage

```
const { format } = require('plny');

format(29999.99);
// '29 999,95 zł'
```


## Options

All formatting options from [`number-currency-format`](https://github.com/zdanowiczkonrad/number-currency-format) are allowed.

Example: 
```
format(29999.99, {
    currency: 'PLN',
    showDecimals: 'NEVER'
}
// '30 000 PLN'
```