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

var showProblem = function(arg1, stub_res) {
    var msg = '';
    msg += 'The number string is ' + arg1 + '. \n';
    msg += 'The number should be ' + stub_res + ' .\n';
    return msg;
};

var notEqual = function(arg1, stub_res, result, num) {
    var msg = '';
    msg += 'The ' + num + 'th test case is wrong\n';
    msg += showProblem(arg1, stub_res);
    msg += 'Your answer ' + result + ' is wrong .\n';
    return msg;
};

exports.notEqual = notEqual;