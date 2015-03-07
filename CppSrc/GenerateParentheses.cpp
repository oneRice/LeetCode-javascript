class Solution {
public:
    typedef vector<int> pareCode;

    typedef struct posInfo
    {
        int pos;
        int used;
    };

    vector<pareCode> getPareByPos(posInfo curPos, int allstep, pareCode code) {
        vector<pareCode> codeRes;
        if (curPos.pos == allstep) {
            codeRes.push_back(code);
            return codeRes;
        }
        for (int i = 0; i <= curPos.pos - curPos.used && i < allstep - curPos.used; i ++) {
            pareCode nextCode = code;
            nextCode.push_back(i);
            posInfo nextPos = {curPos.pos + 1, curPos.used + i};
            vector<pareCode> temp = getPareByPos(nextPos, allstep, nextCode);
            for (std::vector<pareCode>::iterator it = temp.begin(); it != temp.end(); ++it) {
                codeRes.push_back(*it);
            }
        }
        return codeRes;
    }

    string codeToString(pareCode code) {
        string str;
        int right = 0;
        for (pareCode::iterator it = code.begin(); it != code.end(); ++it) {
            for(int i = 0; i < *it; i ++) {
                str.push_back(')');
                right ++;
            }
            str.push_back('(');
        }
        for (int i = 0; i < code.size() - right; i++) {
            str.push_back(')');
        }
        return str;
    }

    vector<string> codeToStringVector(vector<pareCode> codeRes) {
        std::vector<string> stringRes;
        for (std::vector<pareCode>::iterator it = codeRes.begin(); it != codeRes.end(); ++it) {
            string temp = codeToString(*it);
            stringRes.push_back(temp);
        }
        return stringRes;
    }


    vector<string> generateParenthesis(int n) {
        vector<pareCode> codeRes;
        pareCode current;
        current.push_back(0);
        posInfo nextPos = {1 ,0};
        codeRes = getPareByPos(nextPos, n, current);
        vector<string> stringRes = codeToStringVector(codeRes);
        return stringRes;
    }
};
