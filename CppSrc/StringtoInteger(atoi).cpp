class Solution {
public:
    int max = 2147483647;
    int min = -2147483648;

    bool isNum(char c) {
        return c >= '0' && c <= '9';
    }

    int myAtoi(string str) {
        if (str.empty()){
            return 0;
        }
        int res = 0;
        int flag = 1;
        int shown = 0;

        while (str[0] == ' ') {
            str.erase(str.begin());
        }

        while (str[0] == '+' || str[0] == '-') {
            if (shown == 1) {
                return 0;
            }

            if (str[0] == '-') {
                flag = -1;
            }
            str.erase(str.begin());
            shown = 1;
        }

        for (int i = 0; i < str.size(); i++) {
            if (!isNum(str[i])){
                break;
            }
            if (inLimit(res, flag, str[i]-'0')) {
                res *= 10;
                res += str[i] - '0';
            } else {
                return getLimit(flag);
            }
        }

        return res * flag;
    }

    bool inLimit(int res, int flag, int dig) {
        if (flag == 1) {
            if ((max - dig) / 10 >= res){
                return true;
            }
        } else {
            if ((min + dig) / 10 <= res * -1) {
                return true;
            }
        }
        return false;
    }

    int getLimit(int flag) {
        return flag == 1 ? max : min;
    }

};
