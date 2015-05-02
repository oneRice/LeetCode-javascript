class Solution {
public:
    vector<vector<string>> partition(string s) {
        vector<vector<string> > res;
        vector<string> solution;
        generateAllSolution(res, solution, 0, s);
        return res;
    }

    void generateAllSolution(vector<vector<string> > &res, vector<string> &solution, int start, string &str) {
        if (start == str.size()) {
            res.push_back(solution);
            return;
        }

        for (int i = start; i < str.size(); i++) {
            if (isPalindrome(str, start, i)) {
                solution.push_back(str.substr(start,i-start+1));
                generateAllSolution(res, solution, i+1, str);
                solution.pop_back();
            }
        }

        return;
    }

    bool isPalindrome(string &str, int low, int up) {
        while(low < up) {
            if (str[low] != str[up])
                return false;
            low ++;
            up --;
        }

        return true;
    }
};
