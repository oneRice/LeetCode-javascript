class Solution {
public:
    int searchInsert(int A[], int n, int target) {
        
        int up = n, down = 0, mid = n/2;
        while(up != mid && down != mid) {
            if(A[mid] == target) return mid;
            if(A[mid] > target) {
                up = mid;
                mid = (up + down)/2;
                continue;
            }else {
                down = mid;
                mid = (up + down)/2;
                continue;
            }
        }
        if(A[mid] >= target) return mid;
        return mid + 1;
    }
};
