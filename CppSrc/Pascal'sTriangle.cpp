class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> result;
        vector<int> cur;
        if(numRows < 1) return result;
        cur.push_back(1);
        result.push_back(cur);
        for (int i = 1; i < numRows; ++i) {
            cur.clear();
            cur.push_back(1);
            int lastsize = result[i-1].size();
            for (int j = 0; j < lastsize-1; ++j) {
                cur.push_back(result[i-1][j] + result[i-1][j+1]);
            }
            cur.push_back(1);
            result.push_back(cur);
        }
        return result;
    }
};
