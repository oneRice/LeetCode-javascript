'use strict';

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var getValue = function (list) {
    if (list === null) {
        return 0;
    }
    return list.val;
};

var moveNext = function (list) {
    if (list === null) {
        return null;
    }
    return list.next;
};

var addTwoNumbers = function(l1, l2) {
    var flow = 0;
    var n1 = getValue(l1);
    var n2 = getValue(l2);  
    var digit = n1 + n2 + flow;
    flow = parseInt(digit/10);
    digit = digit % 10;
    var head = new ListNode(digit);
    var last = head;
    l1 = moveNext(l1);
    l2 = moveNext(l2);   
    
    while (l1 !== null || l2 !== null || flow !== 0){
        n1 = getValue(l1);
        n2 = getValue(l2);
        digit = n1 + n2 + flow;
        flow = parseInt(digit/10);
        digit = digit % 10;
        var newNode = new ListNode(digit);
        last.next = newNode;
        last = newNode;
        l1 = moveNext(l1);
        l2 = moveNext(l2);
    }
    
    return head;
};
exports.addTwoNumbers = addTwoNumbers;