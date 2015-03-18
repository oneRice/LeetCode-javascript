class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        uint32_t rev = 0;
        for (int i = 0; i < 32; i++) {
            rev *= 2;
            if (n % 2 != 0) {
                rev += 1;                
            }
            n /= 2;
        }
        return rev;
    } 
};
