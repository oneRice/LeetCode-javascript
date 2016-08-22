/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var sum = function (arr) {
    if (arr.length === 0){
        return -1;
    }
    var num = 0;
    for (var i = 0; i < arr.length; i++) {
        num += arr[i];
    }
    return num;
}

var asc = function (a, b) {
    return a - b;
}

var same = function (arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return false;
    }
    if (arr1.length != arr2.length) {
        return false;
    }
    var bak1 = arr1.slice(0, arr1.length);
    bak1.sort(asc);
    var bak2 = arr2.slice(0, arr2.length);
    bak2.sort(asc);
    for (var i = 0; i < arr1.length; i++) {
        if (bak1[i] != bak2[i]) {
            return false;
        }
    }
    return true;
}

var eliminareDuplicare = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (same(arr[i], arr[j])) {
                arr.splice(j, 1);
                j -= 1;
            }
        }
    }
    return arr;
}

var findSum = function(nums, start, current, res) {
    if (sum(current) === 0) {
        console.log('find result');
        for (var i = 0; i < current.length; i++) {
            console.log('answer ' + current[i]);
        }
        res.push(current);
    }
    for (var i = start; i < nums.length; i++) {
        current.push(nums[i]);
        res = findSum(sum, i + 1, current, res);
        current.pop();
    }
    return res;
}

var threeSum = function(nums) {
    var res = [];
    var current;
    var nums = nums.sort(asc);
    for (var i = 0; i < nums.length; i++) {
        current = []
        current.push(nums[i]);
        res = findSum(nums, i + 1, current, res);
    }
    //res = eliminareDuplicare(res);
    return res;
};