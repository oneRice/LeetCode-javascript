class Solution {
public:
    int titleToNumber(string s) {  
        int len = s.length();
        if(0 == len) return -1;
        int sum = 0;
        for(int i = 0; i < len; i++)
        {
            int columnCharNum = s.at(i);
            if(columnCharNum > 'Z' || columnCharNum < 'A') return -1;
            sum = sum*26 + columnCharNum - 'A' + 1;
        }
        return sum; 
    }
};
