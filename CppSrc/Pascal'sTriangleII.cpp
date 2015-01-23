class Solution {
public:
    vector<int> getRow(int rowIndex) {
        vector<int> index[2];
        if(rowIndex < 0) return index[0];
        index[0].push_back(1);
        if(rowIndex == 0) return index[0];
        index[0].push_back(1);
        if(rowIndex == 1) return index[0];
        index[1].push_back(1);
        index[1].push_back(2);
        index[1].push_back(1);
        if(rowIndex == 2) return index[1];
        int cur = 1;
        for(int i = 3; i < rowIndex + 1; i++) {
            int uncur = (cur == 1)?0:1;
            index[uncur].clear();
            index[uncur].push_back(1);
            int size = index[cur].size();
            for(int j = 0; j < size - 1; j++) {
                index[uncur].push_back(index[cur][j] + index[cur][j+1]);
            }
            index[uncur].push_back(1);
            cur = uncur;
        }
        return index[cur];
    }
};
