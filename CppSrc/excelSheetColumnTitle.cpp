/*Generate the title string from the lower position*/
class Solution {
public:
    string convertToTitle(int n) {
        string title;
        while(n>0)
        {
            char bit = 'A' + (n-1)%26;
            title.insert(title.begin(),bit);
            n -= (n-1)%26;
            n /= 26;
        }
        return title;
    }
};
