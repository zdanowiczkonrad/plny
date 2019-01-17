const { format } = require('./index');

const result = format(29999.95);
const expected = '29 999,95 zł';

if (result === expected) {
    console.log('All tests passed.');
} else {
    console.log(`Tests failed. Expected ${expected}, got ${result}.`);
    process.exit(1);
}