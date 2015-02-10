class Solution {
public:
    int lengthOfLastWord(const char *s) {
        int last = 0;
        int length = 0;
        int ind = 0;
        while(*s != '\0') {
            if(*s != ' ') {
                length ++;
                ind = 1;
            } else if(ind == 1) {
                last = length;
                length = 0;
                ind = 0;
            }
            s++;
        }
        if(ind == 1)
            return length;
        return last;
    }
};
