class Solution {
public:
    int getCharLen(char *string) {
        int charLen = 0;
        while(*string != '\0') {
            charLen ++;
            string ++;
        }
        return charLen;
    }

    bool find(char *line, char *word) {
        while(*word != '\0') {
            if(*line != *word)
                return false;
            line ++;
            word ++;
        }
        return true;
    }

    int strStr(char *haystack, char *needle) {
        if(haystack == NULL || needle == NULL) 
            return -1;
        int hayLen = getCharLen(haystack);
        int needleLen = getCharLen(needle);
        if(needleLen == 0)
            return 0;
        if(hayLen == 0)
            return -1;
        int index = 0;
        while(hayLen - index >= needleLen) {
            if(find(haystack, needle))
                return index;
            index++;
            haystack++;
        }
        return -1;
    }
};
