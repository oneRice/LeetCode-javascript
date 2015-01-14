class Solution {
public:
    int isNotAlper(char in)
    {
        if(in > 'Z' || in < 'A') return 1;
        return 0;
    }
    int titleToNumber(string s) { 
        int len = s.length();
        if(0 == len) return -1;
        int sum = 0;
        for(int i = 0; i < len; i++)
        {
            if(isNotAlper(s.at(i))) return -1;
            sum *= 26;
            sum += s.at(i) - 'A' + 1;
        }
        return sum;
    }
};
