class Solution {
public:
    void sortColors(int A[], int n) {
        int count[3] = {0};
        for (int i = 0; i < n; i++) {
            count[A[i]]++;
        }    
        for (int i = 0; i < n; i++) {
            A[i] = (count[0] != 0)? 0: ((count[1] != 0) ? 1: 2);
            count[A[i]]--;
        }
        return;
    }
};
