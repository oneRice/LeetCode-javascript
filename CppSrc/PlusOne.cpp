class Solution {
public:
    vector<int> ReverseAdd(vector<int> bin, int indent) {
        vector<int> res;
        if(indent == 1) 
            res.push_back(1);
        for(vector<int>::reverse_iterator it = bin.rbegin(); it != bin.rend(); it++) {
            res.push_back(*it);
        }
        return res;
    }

    vector<int> plusOne(vector<int> &digits) {
        vector<int> bin;
        if(digits.empty())
            return bin;
        
        int indent = 1;
        for(vector<int>::reverse_iterator it = digits.rbegin(); it != digits.rend(); it++) {
            int sum = indent + *it;
            if(sum == 10) {
                indent = 1;
                bin.push_back(0);
            } else {
                indent = 0;
                bin.push_back(sum);
            }
        }
        
        bin = ReverseAdd(bin, indent);
        
        return bin;
    }
};
