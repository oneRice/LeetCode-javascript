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
    ListNode *deleteDuplicates(ListNode *head) {
        ListNode *currentNode = head;
        ListNode *preNode = NULL;
        while(currentNode != NULL)
        {
            if(preNode == NULL|| preNode->val != currentNode->val)
            {
                preNode = currentNode;
                currentNode = currentNode->next;
            }
            else
            {
                preNode->next = currentNode->next;
                currentNode = preNode->next;
            }
        }
        return head;
    }
};
