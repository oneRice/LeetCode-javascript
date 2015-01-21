class Solution {
public:
    int climbStairs(int n) {
        int last = 1, now = 2;
        if(n == 1) return last;
        if(n == 2) return now;
        for(int i = 2; i < n; i++)
        {
            int temp = now;
            last += now;
            now = last;
            last = temp;
        }
        return now;
    }
};
