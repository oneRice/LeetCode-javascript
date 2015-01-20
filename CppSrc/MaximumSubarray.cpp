class Solution {
public:
    int maxSubArray(int A[], int n) {
        if(n == 0) return 0;
        int max = 0, sum = 0, flag = 0, min;
        for(int i = 0; i < n; i++) {
            sum += A[i];
            if(sum < 0) sum = 0;
            else flag = 1;
            if(sum > max) max = sum;
        }
        if(flag == 0) {
            min = A[0];
            for(int i = 0; i < n; i++)
            {
                if(A[i] > min) min = A[i];
            }
            max = min;
        }
        return max;
    }
};
