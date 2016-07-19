/**
 * @param {number} num
 * @return {string}
 */

var digit = [['I', 'V'],
             ['X', 'L'],
             ['C', 'D'],
             ['M']];

var intToRoman = function(num) {
    var res = '';
    var pos = 0;
    while (num !== 0) {
        var current = num % 10;
        if (current > 0 && current < 4) {
            res = digit[pos][0].repeat(current) + res;
        } else if (current === 4) {
            res = digit[pos][0] + digit[pos][1] + res;
        } else if (current === 5) {
            res = digit[pos][1] + res;
        } else if (current > 5 && current < 9) {
            res = digit[pos][1] + digit[pos][0].repeat(current - 5) + res;
        } else if (current === 9) {
            res = digit[pos][0] + digit[pos + 1][0] + res;
        }
        pos += 1;
        num = parseInt(num / 10);
    }
    return res;
};