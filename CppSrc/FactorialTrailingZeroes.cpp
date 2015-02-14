class Solution {
public:
    int trailingZeroes(int n) {
        int fiveContainer = 5;
        int sum = 0;
        while(fiveContainer <= n) {
            sum += n/fiveContainer;
            if(fiveContainer == 1220703125) {
                break;
            }
            fiveContainer *= 5;
        }
        return sum;  
    }
};
