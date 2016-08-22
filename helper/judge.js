/*
 * LeetCode-javascript
 * https://github.com/oneRice/LeetCode-javascript
 *
 * Copyright (c) 2016 oneRice
 * Licensed under the MIT license.
 */ 

"use strict";

var asc = function (a, b) {
    return a - b;
}

var sameArray = function (arr1, arr2) {
    if (!Array.isArray(arr1) || !(Array.isArray(arr2))) {
        return false;
    }
    if (arr1.length != arr2.length) {
        return false;
    }
    var bak1 = arr1.slice(0, arr1.length);
    bak1.sort(asc);
    var bak2 = arr2.slice(0, arr2.length);
    bak2.sort(asc);
    for (var i = 0; i < arr1.length; i++){
        if (bak1[i] !== bak2[i]){
            return false;
        }
    }
    return true;
};

var sameUnsortedArrayTwo = function (arr1, arr2) {
    if (!Array.isArray(arr1) || !(Array.isArray(arr2))) {
        return false;
    }    
    if (arr1.length != arr2.length) {
        return false;
    }
    var bak1 = arr1.slice(0, arr1.length);
    bak1.sort(asc);
    var bak2 = arr2.slice(0, arr2.length);
    bak2.sort(asc);
    for (var i = 0; i < arr1.length; i++){
        if (!sameArray(bak1[i], bak2[i])){
            return false;
        }
    }
    return true;
};

var noduplicatetwo = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (i === j) {
                continue;
            }
            if (sameArray(arr[i], arr[j])) {
                return false;
            }
        }
    } 
    return true;

};

var sameArray = function (a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
        return false;
    }
    if (a.length !== b.length) {
        return false;
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
};

exports.sameUnsortedArrayTwo = sameUnsortedArrayTwo;
exports.noduplicatetwo = noduplicatetwo;

exports.sameArray = sameArray;