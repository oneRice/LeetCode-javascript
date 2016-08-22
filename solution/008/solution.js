/**
 * @param {string} str
 * @return {number}
 */

var isDigit = function(str) {
    return (str.charCodeAt() >= '0'.charCodeAt()) && (str.charCodeAt() <= '9'.charCodeAt());
};

var toDigit = function(str) {
    return str.charCodeAt() - '0'.charCodeAt(); 
};

var myAtoi = function(str) {
    var res = 0;
    var sign = 1; 
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ' || str[i] === '  ') {
            continue;
        }

        if (str[i] === '-') {
            sign = -1;
            continue;
        } else if (str[i] === '+') {
            sign = 1;
            continue;
        }

        if (! isDigit(str[i])) {
            break;
        }
        
        res *= 10;
        res += toDigit(str[i]);
    }
    return sign * res;
};