class Solution {
public:
    bool isSame(char a, char b) {
        if (a == b
            || a == b - 'a' + 'A'
            || a == b + 'a' - 'A')
            return true;
        return false;
    }

    bool isPalindromeRawString(deque<char> s) {
        while(!s.empty() && s.size() != 1) {
            if(!isSame(s.back(), s.front()))
                return false;
            s.pop_back();
            s.pop_front();
        }
        return true;
    }

    bool ischar(char in) {
        if ((in >= 'a' && in <='z')
            || (in >= 'A' && in <= 'Z')
            || (in >= '0' && in <= '9'))
            return true;
        return false;
    }

    deque<char> trim(string s) {
        deque<char> res;
        while(!s.empty()) {
            if(ischar(s.back())) {
                res.push_back(s.back());
            }
            s.pop_back();
        }
        return res;
    }

    bool isPalindrome(string s) {
        return isPalindromeRawString(trim(s));
    }
};
