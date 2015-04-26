class Solution {
public:
    bool canJump(vector<int>& nums) {
        for (int i = 0; i < nums.size() - 1; i++) {
            nums[i] = max(nums[i], getLast(nums, ia));
            if (nums[i] == 0) {
                return false;
            }
        }
        return true;
    }

    int getLast(vector<int> &nums, int index) {
        if (index == 0) {
            return 0;
        } else {
            return nums[index-1] - 1;
        }
    }
};
