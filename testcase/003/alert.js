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

var showProblem = function(s) {
    var msg = '';
    msg += 'The long string is ' + s + '.\n';
    return msg;
};

var stringNotEqual = function(s, l) {
    var msg = showProblem(s);
    msg += 'The length of substring should be ' + l + '.\n';
    return msg;
};


exports.stringNotEqual = stringNotEqual;
exports.showProblem = showProblem;

