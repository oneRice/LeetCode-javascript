/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    var space = 0;
    for (var i = 0; i < height.length - 1; i++) {
        for (var j = height.length - 1; j > i; j--) {
            if (height[j] >= height[i]) {
                space = height[i] * (j - i);
                if (space > max) {
                    max = space;
                }
                break;
            } else {
                space = height[j] * (j - i);
                if (space > max) {
                    max = space;
                }
            }
        }
    }
    return max;
};
