class Solution {
public:
    deque<int> generateCurrent(deque<int> last) {
        deque<int> current;
        int curNum, curTimes;
        while(!last.empty()) {
            curNum = last.front();
            curTimes = 1;
            last.pop_front();
            while(!last.empty() && curNum == last.front()) {
                curTimes++;
                last.pop_front();
            }
            current.push_back(curTimes);
            current.push_back(curNum);
        }
        return current;
    }

    string dequeToString(deque<int> current) {
        string res;
        while(!current.empty()) {
            res.push_back(current.front() + '0');
            current.pop_front();
        }
        return res;
    }

    string countAndSay(int n) {
        if(n <= 0)
            return "";
        deque<int> current;
        current.push_back(1);
        for(int times = 1; times < n; times ++) {
            current = generateCurrent(current);
        }
        string res = dequeToString(current);
        return res;
    }
};
