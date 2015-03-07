class Solution {
public:
    int maxProfit(vector<int> &prices) {
        int max = 0;
        int size = prices.size();
        int tempMax = 0;
        int section = 0;
        for (int i = 0; i < size - 1; i++) {
            section += prices[i + 1] - prices [i];
            if(section > max) {
                max = section;
            }
            if (section <= 0) {
                section = 0;
            }
        }
        return max;
    }
};
