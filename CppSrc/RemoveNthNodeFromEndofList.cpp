/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    bool isValidInput(int length, int indexFromEnd) {
        if (length == 0 || length < indexFromEnd)
            return false;
        return true;
    }

    int getListLength(ListNode *head) {
        int length = 0;
        while(head != NULL){
            head = head->next;
            length++;
        }
        return length;
    }

    ListNode *removeNthFromHead(ListNode *head, int n) {
        if (n == 0)
            return head->next;
        ListNode *temp = head;
        int walked = 0;
        while(walked != n - 1) {
            temp = temp->next;
            walked++;
        }
        temp->next = temp->next->next;
        return head;
    }

    ListNode *removeNthFromEnd(ListNode *head, int n) {
        int length = getListLength(head);
        if(isValidInput(length, n)){
            ListNode *newhead = removeNthFromHead(head, length - n);
            return newhead;
        }
        return head;
    }
};
