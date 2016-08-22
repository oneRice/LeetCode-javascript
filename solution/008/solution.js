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
    var sign_view = false;
    var first_appear = false;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ' || str[i] === '  ') {
            if (first_appear === true) {
                break;
            }
            continue;
        }

        if (str[i] === '-') {
            sign = -1;
            if (sign_view === true) {
                return 0;
            }
            sign_view = true;
            first_appear = true;
            continue;
        } else if (str[i] === '+') {
            sign = 1;
            if (sign_view === true) {
                return 0;
            }
            sign_view = true;
            first_appear = true;
            continue;
        }

        if (! isDigit(str[i])) {
            break;
        }
        
        first_appear = true;
        res *= 10;
        res += toDigit(str[i]);
    }

    if (sign * res > 2147483647) {
        return 2147483647;
    } else if (sign * res < -2147483648) {
        return -2147483648;
    }

    return sign * res;
};