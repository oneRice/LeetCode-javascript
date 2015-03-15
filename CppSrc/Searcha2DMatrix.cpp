typedef struct {
    int low;
    int up;
} range;

class Solution {
    int rowSize;
    int columnSize;
public:
    bool searchMatrix(vector<vector<int> > &matrix, int target) {
        int column = matrix.size();
        if (column == 0)
            return false;
        int row = matrix[0].size();
        if (row == 0)
            return false;
        rowSize = row;
        columnSize = column;

        range ran;
        ran.low = 0;
        ran.up = column * row - 1;
        return searchVector(matrix, ran, target);
    }

    bool searchVector(vector<vector<int> > &matrix, range ran, int target) {
        int mid = (ran.low + ran.up) / 2;
        int value = getValue(matrix, mid);
        if (value == target)
            return true;
        if (ran.up == ran.low)
            return false;
        if (value > target) {
            ran.up = mid;
            return searchVector(matrix, ran, target);
        } else {
            if (mid == ran.up - 1) {
                ran.low = ran.up;
                return searchVector(matrix, ran, target);
            }
            ran.low = mid;
            return searchVector(matrix, ran, target);
        }
        return true;
    }

    int getValue(vector<vector<int> > &matrix, int pos) {
        int column = pos / rowSize;
        int row = pos - column * rowSize;
        return matrix[column][row];
    }
};
