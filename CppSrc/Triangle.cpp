class Solution {
public:
    int minimumTotal(vector<vector<int> > &triangle) {
        int size = triangle.size();
        for (int layer = 1; layer < triangle.size(); layer++) {
            int layersize = triangle[layer].size();
            triangle[layer][0] += triangle[layer-1][0];
            triangle[layer][layersize - 1] += triangle[layer-1][layersize - 2];
            for (int i = 1; i < layersize - 1; i++) {
                triangle[layer][i] += min(triangle[layer-1][i-1], triangle[layer-1][i]); 
            }
        }
        
        int min = triangle[size-1][0];
        for (int i = 1; i < size; i++) {
            if (triangle[size-1][i] < min) {
                min = triangle[size-1][i];
            }
        }
        return min;
    }
};
