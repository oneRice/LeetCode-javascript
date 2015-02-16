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
    int getListLength(ListNode *head) {
        int length = 0;
        while(head != NULL) {
            length++;
            head = head->next;
        }
        return length;
    }

    ListNode *removeFromHead(ListNode *head, int len) {
        for(;len > 0; len--)
            head = head->next;
        return head;
    }

    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        if(headA == NULL || headB == NULL)
            return NULL;
        int lenA = getListLength(headA);
        int lenB = getListLength(headB);
        ListNode *tempNodeA;
        ListNode *tempNodeB;
        if(lenA > lenB) {
            tempNodeA = removeFromHead(headA, lenA - lenB);
            tempNodeB = headB;
        } else {
            tempNodeA = removeFromHead(headB, lenB - lenA);
            tempNodeB = headA;
        }
        while(tempNodeA != tempNodeB && tempNodeA != NULL && tempNodeB != NULL) {
            tempNodeA = tempNodeA->next;
            tempNodeB = tempNodeB->next;
        }
        return tempNodeA;
    }
