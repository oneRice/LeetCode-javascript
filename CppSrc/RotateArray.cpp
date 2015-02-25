class Solution {
public:
    void rotate(int nums[], int n, int k) {
        std::vector<int> temp;
        for (int i = 0; i < n; ++i)
        {
            temp.push_back(nums[i]);
        }
        for (int i = 0; i < n; ++i)
        {
            int bit = (i + k) % n;
            nums[bit] = temp[i];
        }
        return;
    }
};
