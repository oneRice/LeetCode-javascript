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

var showProblem = function(str, par) {
    var msg = '';
    msg += 'The string is ' + str + ' .\n';
    msg += 'The longest palindrome should be ' + par + ' .\n';
    return msg;
};

var strNotEqual = function(str, par, result) {
    var msg = showProblem(str, par);
    msg += 'Your answer ' + result + ' is wrong .\n';
    return msg;
};


exports.strNotEqual = strNotEqual;