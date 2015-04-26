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
    ListNode* partition(ListNode* head, int x) {
        ListNode *res = head, *left = NULL, *last, *current = head;
        int first = 1;
        int findBig = 0;
        while (current != NULL) {
            if (current->val < x) {
                if (first == 1) { // first is minus, head is determined
                    left = res;
                    last = res;
                } else {
                    if (left == NULL) { // find first minus value, need update the head
                        res = current;
                        last->next = current->next;
                        current->next = head;
                        left = current;
                    } else if (findBig == 1){ // deleter value and add value after the left
                        last->next = current->next;
                        current->next = left->next;
                        left->next = current;
                        left = current;
                    } else { // no move
                        last = left = current;
                    }

                }
            } else {// bigger value, no move
                last = current;
                findBig = 1;
            }
            current = last->next;
            first = 0;
        }
        return res;
    }
};
