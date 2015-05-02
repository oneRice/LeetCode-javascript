class Solution {
public:
    double myPow(double x, int n) {
        if (abs(x) < 0.00001)
            return 0;
        
        bool sign = false;
        if (n < 0) {
            n *= -1;
            sign = true;
        }
        
        unsigned int ex = n;

        double result = 1.0;
        
        while(ex) {
            if (ex & 1) {
                result *= x;
            }
            ex >>= 1;
            x *= x;
        }

        return sign? 1/result : result;
    }
};
