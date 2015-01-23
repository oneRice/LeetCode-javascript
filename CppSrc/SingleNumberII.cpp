class Solution {
public:
    int bitToInt(int bitArray[32]) {
        int curValue = 1;
        int sum = 0;
        for(int i = 0; i < 32; i++) {
            sum += bitArray[i] * curValue;
            curValue *= 2;
        }
        return sum;
    }

    int bitIsOne(int num, int bit) {
        return num & (1<<bit);
    }
    
    int singleNumber(int A[], int n) {
        int appearTimes[32] = {0};
        for(int num = 0; num < n; num ++) {
            for(int bit = 0; bit < 32; bit ++) {
                if(bitIsOne(A[num], bit)) appearTimes[bit]++;
            }
        }
        for(int bit = 0; bit < 32; bit++) {
            if(0 == appearTimes[bit] % 3) appearTimes[bit] = 0;
            else appearTimes[bit] = 1;
        }
        return bitToInt(appearTimes);
    }
};
