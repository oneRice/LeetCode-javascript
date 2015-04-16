class Solution {
public:
	int binaryFind(vector<int> &numbers, int low, int up, int target) {
		int pos = -1;
		if (low <= up) {
			int mid = low + (up - low) / 2;
			if (numbers[mid] == target)
				return mid;
			if (numbers[mid] > target)
				return binaryFind(numbers, low, mid - 1, target);
			if (numbers[mid] < target)
				return binaryFind(numbers, mid + 1, numbers.size() - 1, target);
		}
		return pos;
	}

    vector<int> twoSum(vector<int> &numbers, int target) {
    	vector<int> res;
    	vector<int> find (numbers.begin(), numbers.end());
        sort(find.begin(), find.end());
    	int first, second;
    	for (first = 0; first < find.size(); first++) {
    		second = binaryFind(find, first + 1, find.size() - 1, target - find[first]);
    		if (second != -1)
    			break;
    	}

    	for (int i = 0; i < numbers.size(); i++) {
    		if(numbers[i] == find[first]) {
    			first = i;
    			break;
    		}
    	}

    	for (int i = 0; i < numbers.size(); i++) {
    		if(numbers[i] == find[second]) {
    			if (i == first)
    				continue;
    			second = i;
    			break;
    		}
    	}

    	if (first > second){
			int temp = first;
			first = second;
			second = temp;
	    }

    	res.push_back(first + 1);
    	res.push_back(second + 1);
    	return res;
    }
};
