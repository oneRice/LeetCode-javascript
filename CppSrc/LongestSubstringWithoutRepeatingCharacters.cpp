class Solution {
public:
    bool noShown(char alp, string s, int start, int last) {
        for (int i = start; i < last; i++) {
            if (s[i] == alp) {
                return false;
            }
        }
        return true;
    }

    int getMax(string s, int index, int lastLen) {
        int len = lastLen - 1;
        int last = index + len;
        while (last <= s.size() - 1) {
            if (noShown(s[last], s, index, last)) {
                last++;
                len++;
                continue;
            }
            break;
        }
        return len;
    }

    int lengthOfLongestSubstring(string s) {
        int len = 0;
        int lastLen = 1;
        for (int i = 0; i < s.size(); i++) {
            int tempLen = getMax(s, i, lastLen);
            lastLen = tempLen;
            if (tempLen > len) {
                len = tempLen;
            }
        }
        return len;
    }
};
