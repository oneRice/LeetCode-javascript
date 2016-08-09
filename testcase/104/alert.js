/*
 * LeetCode-javascript
 * https://github.com/oneRice/LeetCode-javascript
 *
 * Copyright (c) 2016 oneRice
 * Licensed under the MIT license.
 */

'use strict';

var Helper = require('./test_helper.js'); // helper module
var stringArray = Helper.stringArray;

var showProblem = function(arg1, stub_res) {
    var msg = '';
    msg += 'The tree is\n';
    msg += Helper.treeNodeHelper.showTree(arg1);
    msg += 'The max depth should be ' + stub_res + ' .\n';
    return msg;
};

var notEqual = function(arg1, stub_res, result) {
    var msg = showProblem(arg1, stub_res);
    msg += 'Your answer ' + result + ' is wrong .\n';
    return msg;
};

exports.notEqual = notEqual;