class Solution {
public:
    int getFreq(int index, vector<int> &origin) {
        int sum = 1;
        for (int i = index + 1; i < origin.size(); i++) {
            if (origin[i] == origin[index]) {
                sum++;
            } else {
                break;
            }
        }
        return sum;
    }
    
    int getNext(int index, vector<int> &origin) {
        for (int i = index + 1; i < origin.size(); i++) {
            if (origin[i] != origin[index]) {
                return i;
            }
        }
        return origin.size();
    }
    
    void proceed(vector<int> & solu, int times, int value) {
        for (int i = 0; i < times; i++) {
            solu.push_back(value);
        }
        return;
    }
    
    void revert(vector<int> &solu, int times) {
        for (int i = 0; i < times; i++) {
            solu.pop_back();
        }
        return;
    }
    
    void generateSubset(vector<vector<int> > &res, vector<int> &solu, int start, int remain, vector<int> &origin) {
        if (remain == 0) {
            res.push_back(solu);
            return;
        }
        while(start != origin.size()) {
            int num = getFreq(start, origin);
            int next = getNext(start, origin);
            for (int i = 1; i <= min(remain, num); i++) {
                proceed(solu, i, origin[start]);
                generateSubset(res, solu, next, remain - i, origin);
                revert(solu, i);
            }
            start = next;
        }
        return;
    }
    
    vector<vector<int> > subsetsWithDup(vector<int> &S) {
        vector<vector<int> > res;
        sort(S.begin(), S.end());
        for (int i = 0; i <= S.size(); i++) {
            vector<int> solu;
            generateSubset(res, solu, 0, i, S);
        }
        return res;
    }
};
