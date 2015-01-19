class Solution {
public:
    int singleNumber(int A[], int n) {
        for(int i = 1; i < n; i++)
        {
            A[0] ^= A[i]; //NOR of two same number equals 0
        }
        return A[0];
    }
};
