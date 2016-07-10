/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    var current_line = 0;
    var dirction = 1; // 1 is downward, -1 is upward.
    var res_arr = [];
    var res = '';
    for (var i = 0; i < s.length; i++) {
        if (res_arr[current_line] === undefined) {
            res_arr[current_line] = '';
        }
        res_arr[current_line] += s[i];
        if (dirction === 1 && current_line === numRows - 1) {
            dirction = -1;
        } else if (dirction === -1 && current_line === 0) {
            dirction = 1;
        }
        current_line += dirction;
    }
    for (var j = 0; j < res_arr.length; j++) {
        res += res_arr[j];
    }
    return res;
};