/*
 * LeetCode-javascript
 * https://github.com/oneRice/LeetCode-javascript
 *
 * Copyright (c) 2016 oneRice
 * Licensed under the MIT license.
 */

'use strict';

var Helper = require('./test_helper.js').Helper; // helper module
var stringArray = Helper.stringArray;

var showProblem = function(a1, a2, sum) {
    var msg = '';
    msg += '\ninput first: ' + stringArray(a1) + ', input second: ' + stringArray(a2) + '\ntarget: ' + stringArray(sum) + '.\n';
    return msg;
};

var listNum = function(a1, a2, sum, result) {
    var msg = '';
    msg += showProblem(a1, a2, sum);
    msg += 'The result: '+ result + ' is not same the required.';
    return msg;
};

var sumNotEqual = function(a1, a2, sum, len) {
    var msg = '';
    msg += showProblem(a1, a2, sum);
    msg += 'The length of the result: ' + len;
    msg += ' is not equal to the required.\n'; 
    return msg;
};

exports.listNum = listNum;
exports.sumNotEqual = sumNotEqual;
exports.showProblem = showProblem;

