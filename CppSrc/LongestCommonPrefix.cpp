class Solution {
public:
    int findMinSize(vector<string> &strs) {
        int vectorSize = strs.size();
        int minSize = 0xffff;
        for(int strIndex = 0; strIndex < vectorSize; strIndex++) {
            int strSize = strs[strIndex].size();
            if(strSize < minSize)
                minSize = strSize;
        }
        return (minSize == 0xffff)? 0: minSize;
    }

    string longestCommonPrefix(vector<string> &strs) {
        string res;
        int vectorSize = strs.size();
        int currentChar;
        if(vectorSize == 0)
            return res;
        int minStringSize = findMinSize(strs);
        for(int charIndex = 0; charIndex < minStringSize; charIndex++) {
            currentChar = strs[0][charIndex];
            for(int strIndex = 1; strIndex < vectorSize; strIndex++) {
                if(strs[strIndex][charIndex] != currentChar)
                    return res;
            }
            res.push_back(currentChar);
        }
        return res;
    }
};
