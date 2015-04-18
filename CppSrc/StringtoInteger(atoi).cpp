class Solution {
public:
    int max = 2147483647;
    int min = -2147483648;

    int myAtoi(string str) {
        if (str.empty()){
            return 0;
        }

        int start = 0;
        int res = 0;
        int flag = 1;
        int shown = 0;


        while (str[start] == ' ') {
            start ++;
        }

        while (str[start] == '+' || str[start] == '-') {
            if (shown == 1) {
                return 0;
            }

            if (str[start] == '-') {
                flag = -1;
            }
            
            start++;
            shown = 1;
        }

        for (int i = start; i < str.size(); i++) {
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

    bool isNum(char c) {
        return c >= '0' && c <= '9';
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
