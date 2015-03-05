class Solution {
public:
    int power(int base, int times) {
        int res = 1;
        for (int i = 0; i < times; i++) {
            res *= base;
        }
        return res;
    }

    vector<int> grayCode(int n) {
        std::vector<int> v;
        if(n < 1) {
            v.push_back(0);
            return v;            
        }
        v.push_back(0);
        v.push_back(1);
        for (int set = 1; set < n; set++) {
            int currBitVal = power(2, set);
            for (int j = currBitVal - 1; j >= 0; j--) {
                v.push_back(v[j] + currBitVal);
            }
        }
        return v;
    }
};
