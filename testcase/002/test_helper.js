var Helper = require('./../../../helper/helper.js'); // helper module

function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
 
var listToNum = function(list) {
    var num = 0;
    var digit = 1;
    while (list !== null) {
        num += list.val * digit;
        digit *= 10;
        list = list.next;
    }
    return num;
};

var arrayToNum = function(array) {
    var num = 0;
    var digit = 1;
    for (var i = 0; i < array.length; i++) {
        num += array[i] * digit;
        digit *= 10;
    }
    return num;
};

var arrayToList = function(array) {
    var head = new ListNode(array[0]);
    var last = head;
    var now = last;
    for (var i = 1; i < array.length; i++) {
        now = new ListNode(array[i]);
        last.next = now;
        last = now;
    }
    now.next = null;
    return head;
};

var listLength = function(list) {
    var length = 0;
    while (list !== null) {
        length += 1;
        list = list.next;
    }
    return length;
};

var numToArray = function(num) {
    var array = [];
    while (num !== 0) {
        array.push(num % 10);
        num = parseInt(num / 10);
    } 
    return (array.length > 0) ? array : [0];

};

exports.ListNode = ListNode;
exports.listLength = listLength;
exports.listToNum = listToNum;
exports.arrayToNum = arrayToNum;
exports.arrayToList = arrayToList;
exports.numToArray = numToArray;

exports.random = Helper.randomInt;
exports.intLength = Helper.intLength;
exports.stringArray = Helper.stringArray;