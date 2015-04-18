class Solution {
public:
    string expandToPalindrome(string &s, int low, int up) {
        while (low>=0 && up < s.size()) {
            if (s[low] != s[up]) {
                break;
            }
            low--;
            up++;
        }
        string str(s.begin()+low+1, s.begin()+up);
        return str;
    }

    string longestPalindrome(string s) {
        string res, temp;
        for (int i = 0; i < s.size(); i++) {
            temp = expandToPalindrome(s, i, i);
            if (temp.size() > res.size()) {
                res = temp;
            }
        }

        for (int i = 0; i < s.size() - 1; i++) {
            temp = expandToPalindrome(s, i, i+1);
            if (temp.size() > res.size()) {
                res = temp;
            }
        }

        return res;
    }
};
