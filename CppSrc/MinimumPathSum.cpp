class Solution {
public:
    int min(int a, int b) {
        return a < b? a : b;
    }

    int minPathSum(vector<vector<int> > &grid) {
        if(grid.empty())
            return 0;
        int column = grid.size();
        int line = grid[0].size();
        for (int i = 1; i < line; ++i) {
            grid[0][i] += grid[0][i-1];
        }
        for (int i = 1; i < column; ++i) {
            grid[i][0] += grid[i-1][0];
        }
        for (int i = 2; i <= column + line - 2; ++i) {
            for (int j = 1; j < i; ++j) {
                if (j >= column || i - j >= line)
                    continue;
                grid[j][i-j] += min(grid[j-1][i-j], grid[j][i-j-1]);
            }
        }
        return grid[column-1][line-1];
    }
};
