class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int> > &obstacleGrid) {
        int column = obstacleGrid.size();
        if (column == 0)
        	return 0;
        int row = obstacleGrid[0].size();

        vector<int> line(row ,0);
        vector<vector<int> > calMatrix(column,line);

        calMatrix[0][0] = (obstacleGrid[0][0] == 1)? 0: 1;

        int totalStep = row + column - 1;

        for (int step = 1; step < totalStep; step++) {
        	for(int rowIndex = 0; rowIndex < row; rowIndex++) {
        		int columnIndex = step - rowIndex;
        		
        		if (columnIndex >= column
        			|| columnIndex < 0)
        			continue;

        		if (columnIndex == 0) {
        			calMatrix[columnIndex][rowIndex] = calMatrix[columnIndex][rowIndex - 1];
        		} else if (rowIndex == 0) {
        			calMatrix[columnIndex][rowIndex] = calMatrix[columnIndex - 1][rowIndex];
        		} else {
	        		calMatrix[columnIndex][rowIndex] = 
	        			calMatrix[columnIndex - 1][rowIndex] + calMatrix[columnIndex][rowIndex - 1];
        		}

        		if (obstacleGrid[columnIndex][rowIndex] == 1) {
        			calMatrix[columnIndex][rowIndex] = 0;
        		}
        	}
        }

        return calMatrix[column - 1][row - 1];
    }
};
