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
    ListNode* removeElements(ListNode* head, int val) {
        if (head == NULL) {
            return head;
        }
        ListNode *res = removeHead(head, val);
        ListNode *cur = res;
        ListNode *last = NULL;
        while (cur != NULL) {
            if (cur->val != val) {
                last = cur;
                cur = cur->next;
            } else {
                cur = cur->next;
                last->next = cur;
            }
        }
        return res;
    }

    ListNode* removeHead(ListNode *head, int val) {
        while (head != NULL && head->val == val) {
            head = head->next;
        }
        return head;
    }
};
