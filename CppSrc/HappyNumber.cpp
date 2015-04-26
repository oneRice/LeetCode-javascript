class Solution {
private:
    vector<int> shown;
public:
    bool isHappy(int n) {
        if (isShown(n)) {
            return false;
        }
        
        if(n == 1) {
            return true;
        }
        shown.push_back(n);
        vector<int> digit = getDigit(n);
        int newNum = getNewNum(digit);
        return isHappy(newNum);        
    }
    
    bool isShown(int n) {
        for (int i = 0; i < shown.size(); i++) {
            if (shown[i] == n) {
                return true;
            }
        }
        return false;
    }
    
    vector<int> getDigit(int n) {
        vector<int> digit;
        while(n != 0){
            digit.push_back(n % 10);
            n /= 10;
        }
        return digit;
    }
    
    int getNewNum(vector<int> digit) {
        int num = 0;
        for (int i = 0; i < digit.size(); i++) {
            num += digit[i] * digit[i];
        }
        return num;
    }
};
