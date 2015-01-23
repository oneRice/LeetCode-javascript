class Solution {
public:
    string first(int num) {
        string rome;
        switch(num) {
            case 1:
                rome.append("I");
                return rome;
            case 2:
                rome.append("II");
                return rome;
            case 3:
                rome.append("III");
                return rome;
            case 4:
                rome.append("IV");
                return rome;
            case 5:
                rome.append("V");
                return rome;
            case 6:
                rome.append("VI");
                return rome;
            case 7:
                rome.append("VII");
                return rome;
            case 8:
                rome.append("VIII");
                return rome;
            case 9:
                rome.append("IX");
                return rome;
            case 0:
                return rome;
        }
    }
    
    string second(int num) {
        string rome = first(num);
        int size = rome.size();
        for(int i = 0; i < size; i++)
        {
            if(rome[i] == 'I') {
                rome[i] = 'X';
                continue;
            }
            else if(rome[i] == 'V') {
                rome[i] = 'L';
                continue;
            }
            else if(rome[i] == 'X') {
                rome[i] = 'C';
                continue;
            }
        }
        return rome;
    }
    
    string third(int num) {
        string rome = first(num);
        int size = rome.size();
        for(int i = 0; i < size; i++)
        {
            if(rome[i] == 'I') {
                rome[i] = 'C';
                continue;
            }
            else if(rome[i] == 'V') {
                rome[i] = 'D';
                continue;
            }
            else if(rome[i] == 'X') {
                rome[i] = 'M';
                continue;
            }
        }
        return rome;
    }
    
    string fourth(int num) {
        string rome = first(num);
        int size = rome.size();
        for(int i = 0; i < size; i++)
        {
            if(rome[i] == 'I') {
                rome[i] = 'M';
                continue;
            }
        }
        return rome;
    }
    
    string toRoman(int num, int digit) {
        switch(digit) {
            case 0: 
                return first(num);
            case 1:
                return second(num);
            case 2:
                return third(num);
            case 3:
                return fourth(num);
        }
    }
    
    string intToRoman(int num) {
        int digit[4] = {0};
        int index = 0;
        string rome;
        while(num != 0) {
            digit[index] = num % 10;
            num /= 10;
            index ++;
        }
        for(int i = 3; i >= 0; i--)
        {
            rome.append(toRoman(digit[i], i));
        }
        return rome;
    }
};
