class Solution {
public:
    int trailingZeroes(int n) {
        long int fiveContainer = 5;
        int sum = 0;
        while(fiveContainer <= n) {
            sum += n/fiveContainer;
            fiveContainer *= 5;
        }
        return sum;  
    }
};
