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
    ListNode *swapNode(ListNode *first, ListNode *second) {
        first->next = second->next;
        second->next = first;
        return second;
    }

    ListNode *swapPairs(ListNode *head) {
        if (head == NULL)
            return  NULL;
        ListNode *headNode = head;
        ListNode *currNode = head;
        if (headNode->next == NULL)
            return headNode;
        headNode = swapNode(headNode, headNode->next);
        currNode = headNode->next->next;
        ListNode *lastNode = headNode->next;
        while(currNode != NULL && currNode->next != NULL) {
            currNode = swapNode(currNode, currNode->next);
            lastNode->next = currNode;
            lastNode = currNode->next;
            currNode = currNode->next->next;
        }
        return headNode;
    }
};
