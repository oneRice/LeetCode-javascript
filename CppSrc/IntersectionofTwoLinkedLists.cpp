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

    /*
    * This function returns the last Node of a linked list.
    */
    ListNode *getListTail(ListNode *head) {
        if(head == NULL)
            return NULL;
        while(head->next != NULL)
            head = head->next;
        return head;
    }

    /*
    * This function makes out whether a linked list has a circle;  
    */
    ListNode *getMeetPoint(ListNode *head) {
        ListNode* slow = head;
        ListNode* fast = head;
        while(fast != NULL && fast->next != NULL) {
            slow = slow->next;
            fast = fast->next->next;
            if(slow == fast)
                return fast;
        }
        return NULL;
    }

    /*
    * This function returns the start node of circle in a linked list;
    */    
    ListNode *getStartOfCirle(ListNode *head, ListNode *meetPoint) {
        while(head != meetPoint) {
            head = head->next;
            meetPoint = meetPoint->next;
        }
        return head;
    }

    /*
    * This function returns the first intersection of two linked list.
    * If two linked lists have no intersection, return NULL;
    */
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        ListNode *tailA = getListTail(headA);
        if(tailA != NULL) {
            tailA->next = headB;
            ListNode *meetPoint = getMeetPoint(headA);
            if(meetPoint != NULL) {
                ListNode *intersectionNode = getStartOfCirle(headA, meetPoint);
                tailA->next = NULL;
                return intersectionNode;                
            }
        }
        return NULL;
    }
};
