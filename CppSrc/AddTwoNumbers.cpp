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
    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2) {
    	ListNode *res = NULL, **cur = &res;
    	int first, second, sum, carry = 0;
    	
    	while(l1 != NULL || l2 != NULL) {
    		first = getNumAndMove(l1);
    		second = getNumAndMove(l2);
    		sum = first + second + carry;
    		*cur = new ListNode(sum%10);
    		carry = sum/10;
    		cur = &((*cur)->next);
    	}

    	if (carry != 0) {
    		*(cur) = new ListNode(carry);
    	}

    	return res;
    }
private:
    int getNumAndMove(ListNode* &l) {
    	int num = 0;
    	if (l != NULL) {
    		num = l->val;
    		l = l->next;
    	}
    	return num;
    }
};
