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
    msg += 'The number is ' + arg1 + '. \n';
    var sign = (stub_res) ? '' : 'not ';
    msg += 'The number is ' + sign + 'a Palindrome.\n';
    return msg;
};

var notEqual = function(arg1, stub_res, result) {
    var msg = showProblem(arg1, stub_res);
    msg += 'Your judgement is wrong .\n';
    return msg;
};

exports.notEqual = notEqual;