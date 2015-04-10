class Solution {
public:
	int sumVector(vector<int> vec) {
		int sum = 0;
		for (vector<int>::iterator i = vec.begin(); i != vec.end(); ++i) {
			sum += *i;
		}
		return sum;
	}

	void generateAns(vector<vector<int> > &res, vector<int> used, vector<int> remain, int target) {
		if (sumVector(used) > target)
			return;
		if (sumVector(used) == target) {
			res.push_back(used);
			return;
		}
		for (vector<int>::iterator i = remain.begin(); i != remain.end(); ++i) {
			vector<int> usedAfter(used);
			usedAfter.push_back(*i);
			vector<int> remainAfter(i, remain.end());
			generateAns(res, usedAfter, remainAfter, target);
		}
		return;
	}

	vector<vector<int> > combinationSum(vector<int> &candidates, int target) {
		sort(candidates.begin(), candidates.end());
		vector<vector<int> > res;
		for (vector<int>::iterator i = candidates.begin(); i != candidates.end(); ++i) {
			if (*i > target)
				break;
			vector<int> used;
			used.push_back(*i);
			vector<int> remain(i, candidates.end());
			generateAns(res, used, remain, target);
		}
		return res;
	}
};
