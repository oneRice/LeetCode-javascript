class Solution {
public:
    int isLeft(char input) {
        return input == '(' || input == '[' || input == '{';
    }

    int isRight(char input) {
        return input == ')' || input == ']' || input == '}';
    }

    int isMatched(char left, char right) {
        return (left == '(' && right == ')')
               ||(left == '[' && right == ']')
               ||(left == '{' && right == '}');
    }

    bool isValid(string s) {
        vector<char> bracket;
        int length = s.length();
        for (int i = 0; i < length; ++i) {
            if(isLeft(s[i])) {
                bracket.push_back(s[i]);
            }else if(isRight(s[i])) {
                if (bracket.size() == 0) return false;
                if (isMatched(bracket.back(), s[i])) {
                    bracket.pop_back();
                }else {
                    return false;
                }
            }
        }
        return (0 == bracket.size());
    }
};
