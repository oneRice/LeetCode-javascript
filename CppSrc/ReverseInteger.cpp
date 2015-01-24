class Solution {
public:
    int reverse(int x) {
        if(x == 0 || x < -2147483647 || x > 2147483646) return 0;
        vector<int> num;
        int max[10] = {2,1,4,7,4,8,3,6,4,7};
        int ind = x<0? -1: 1;
        int res = 0;
        if(ind == -1) x *= -1;
        while(x != 0) {
            num.push_back(x%10);
            x /= 10;
        }
        while(1) {
            if(num.front() == 0) {
                num.erase(num.begin());
                continue;
            }
            break;
        }
        int size = num.size();
        if(10 == size) {
            for(int i = 0; i < size; i++) {
                if(num [i] < max[i]) break;
                if(num [i] > max[i]) return 0;
            }
        }
        for(int i = 0; i < size; i++) {
            res *= 10;
            res += num[i];
        }
        return res * ind;
    }
};
