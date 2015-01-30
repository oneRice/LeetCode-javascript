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
    ListNode *mergeTwoLists(ListNode *l1, ListNode *l2) {
        if(l1 == NULL && l2 == NULL) 
            return NULL;
        ListNode *start = NULL, *link = NULL;
        while(l1 != NULL && l2 != NULL) {
            ListNode *temp = NULL;
            if(l1->val < l2->val) {
                temp = l1;
                l1 = l1->next;
            } else {
                temp = l2;
                l2 = l2->next;
            }
            if(start == NULL) {
                start = link = temp;
            } else {
                link->next = temp;
                link = link->next;
            }
        }
        ListNode *res = (l1 != NULL)?l1:l2;
        if(res != NULL) {
            if(start != NULL){
                link->next = res;
            } else {
                start = res;
            }
        }
        return start;
    }
};
