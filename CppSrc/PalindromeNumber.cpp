class Solution {
public:
    bool isPalVector(vector<int> numDigit) {
        int size = numDigit.size();
        int turn = size / 2;
        for(int i = 0; i < turn; i++) {
            if(numDigit[i] != numDigit[size - i - 1])
                return false;
        }
        return true;
    }

    bool isPalindrome(int x) {
        if(x < 0) return false;
        vector<int> numDigit;
        while(x!=0){
            numDigit.push_back(x % 10);
            x /= 10;
        }
        return isPalVector(numDigit);
    }
};
