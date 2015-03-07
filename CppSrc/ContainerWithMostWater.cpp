class Solution {
public:
    int maxArea(vector<int> &height) {
        int left = 0;
        int right = height.size() - 1;
        int max = 0;
        while (right > left) {
            int size = ((height[right] < height[left])? height[right] :height[left]) * (right - left);
            if (size > max)
                max = size;
            if (height[left] < height[right]) {
                //find a left higher than current
                do {
                    left ++;
                } while (left < right && height[left] <= height[left - 1]);
            } else {
                do {
                    right--;
                } while (right > left && height[right] <= height[right + 1]);
            }
        }
        return max;
    }
};
