class Solution {
public:
    int romanToInt(string s) {
        map<char, int> numMap;
        numMap['I'] = 1;
        numMap['V'] = 5;
        numMap['X'] = 10;
        numMap['L'] = 50;
        numMap['C'] = 100;
        numMap['D'] = 500;
        numMap['M'] = 1000;
        int len = s.length();
        int sum = numMap[ s[len-1] ];
        for(int i = 0; i < len - 1; i++) {
            if(numMap[ s[i] ] < numMap[ s[i+1] ]) {//in case of 4, 9, 40, 90, 400, 900
                sum -= numMap[ s[i] ];
            }else {
                sum += numMap[ s[i] ];
            }
        }
        return sum;
    }
};
