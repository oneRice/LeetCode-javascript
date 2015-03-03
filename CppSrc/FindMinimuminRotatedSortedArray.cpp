class Solution {
public:
    int findMin(vector<int> &num) {
        if(num.empty())
            return -1;
        for (std::vector<int>::iterator i = num.begin(); i + 1 != num.end(); ++i) {
            if (*i > *(i + 1))
                return *(i + 1);
        }
        return num[0];
    }
};
