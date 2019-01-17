const { format } = require('number-currency-format');

const pl_PL = {
    currency: 'zł',
    thousandSeparator: ' ',
    decimalSeparator: ','
};

module.exports = {
    format: function(number, options) {
        return format(number, Object.assign({}, pl_PL, options || {}))
    }
};