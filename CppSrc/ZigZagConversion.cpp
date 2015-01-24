class Solution {
public:
    string convert(string s, int nRows) {
        if (nRows == 1) return s;
        vector<vector<char>> zig;
        string result;
        int cur = 0;
        int dir = 0;
        int size = s.size();
        for(int i = 0; i < nRows; i++)
        {
            vector<char> temp;
            zig.push_back(temp);
        }
        for (int i = 0; i < size; ++i)
        {
            zig[cur].push_back(s[i]);
            if (dir == 0)
            {
                if (cur != nRows - 1)
                {
                    cur++;
                }else {
                    cur--;
                    dir = 1;
                }
            }else{
                if (cur != 0)
                {
                    cur --;
                }else {
                    cur ++;
                    dir = 0;
                }
            }
        }
        for (int j = 0; j < nRows; ++j)
        {
            int len = zig[j].size();
            if(len == 0) break;
            for (int k = 0; k < len; ++k)
            {
                result.push_back(zig[j][k]);
            }
        }
        return result;
    }
};
