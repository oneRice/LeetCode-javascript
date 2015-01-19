class Solution {
public:
    int numTrees(int n) {
        if(n == 1 || n == 0) return 1;
        int sum = 0;
        for(int i = 0; i < n; i++)
        {
            sum += numTrees(i)*numTrees(n-i-1);
        }
        return sum;
    }
};
