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

var showProblem = function(arg1, arg2, stub_res) {
    var msg = '';
    msg += 'The string is ' + arg1 + ' . The number of every row is ' + arg2 + '.\n';
    msg += 'The restored string should be ' + stub_res + ' .\n';
    return msg;
};

var strNotEqual = function(arg1, arg2, stub_res, result) {
    var msg = showProblem(arg1, arg2, stub_res);
    msg += 'Your answer ' + result + ' is wrong .\n';
    return msg;
};


exports.strNotEqual = strNotEqual;