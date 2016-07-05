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

var showProblem = function(input, target, selected) {
    var msg = '';
    msg += '\ninput: ' + stringArray(input) + 'target: ' + target + '.\n';
    msg += 'select_index: ' + stringArray(selected) + '\n';
    return msg;
};

var sameSelect = function(input, target, selected_index) {
    var msg = '';
    msg += showProblem(input, target, selected_index);
    msg += 'show not be same.';
    return msg;
};

var sumNotEqual = function(input, target, selected_index, selected_num) {
    var msg = '';
    msg += showProblem(input, target, selected_index);
    msg += 'selected_num: ' + stringArray(selected_num) + '.\n';
    msg += 'adds up to ' + (selected_num[0] + selected_num[1]) + 'not equal to target.\n'; 
    return msg;
};

exports.sameSelect = sameSelect;
exports.sumNotEqual = sumNotEqual;
exports.showProblem = showProblem;

