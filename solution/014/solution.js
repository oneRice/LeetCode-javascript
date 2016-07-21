/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var com = '';
    var num = 0;
    var cur = '';
    if (strs.length === 0) {
        return '';
    }
    while(true) {
        if (strs[0].length <= num){
            return com;
        } else {
            cur = strs[0][num];
        }
        for (var i = 1; i < strs.length; i++) {
            if (strs[i].length <= num) {
                return com;
            }
            if (cur !== strs[i][num]) {
                return com;
            }
        }
        com += cur;
        num += 1;
    }
    return com;
};