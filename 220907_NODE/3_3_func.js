// func.js
const { odd, even } = require('./3_3_var');

function checkOddOrEven(num) {
    if (num % 2) {  // 홀수면
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;