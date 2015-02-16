class Solution {
public:
    bool isValidSudoku(vector<vector<char>> &board) {
        int rowShowed[9][9] = {0};
        int columnShowed[9][9] = {0};
        int gridShowed[9][9] = {0};
        for(int rowIndex = 0; rowIndex < 9; rowIndex++) {
            for(int columnIndex = 0; columnIndex < 9; columnIndex++) {
                char charInPos = board[columnIndex][rowIndex];
                if(charInPos == '.')
                    continue;
                int digitIndex = charInPos - '1';

                if(rowShowed[rowIndex][digitIndex] != 0)
                    return false;
                rowShowed[rowIndex][digitIndex] ++;

                if(columnShowed[columnIndex][digitIndex] != 0)
                    return false;
                columnShowed[columnIndex][digitIndex] ++;

                int gridIndex = rowIndex/3 + 3*(columnIndex/3);
                if(gridShowed[gridIndex][digitIndex] != 0)
                    return false;
                gridShowed[gridIndex][digitIndex]++;
            }
        }
        return true;
    }
};
