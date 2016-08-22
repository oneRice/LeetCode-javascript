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
var stringArrayTwo = Helper.stringArrayTwo;

var showProblem = function(arg1, stub_res) {
    var msg = '';
    msg += 'The array is ' + stringArray(arg1) + '. \n';
    msg += 'The answer should be ' + stringArrayTwo(stub_res) + ' .\n';
    return msg;
};

var notEqual = function(arg1, stub_res, result) {
    var msg = showProblem(arg1, stub_res);
    msg += 'Your answer ' + stringArrayTwo(result) + ' is wrong .\n';
    return msg;
};

var duplicate = function(arg1, stub_res, result) {
    var msg = showProblem(arg1, stub_res);
    msg += 'Your answer ' + stringArrayTwo(result) + ' has duplicate content.\n';
    return msg;
};

exports.notEqual = notEqual;
exports.duplicate = duplicate;