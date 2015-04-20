class Solution {
public:
    int rob(vector<int> &num) {
        if (num.empty()){
            return 0;
        }
        for(int i = 1; i < num.size(); i++) {
            if (i == 1) {
                num[1] = max(num[0], num[1]);
            }
            num[i] = max(num[i-1], num[i]+num[i-2]);
        }
        return num.back();
    }
};
