class Solution {
public:
    vector<int> searchRange(int A[], int n, int target) {
        int i = binarySearch(A, 0, n-1, target);
        vector<int> res;
        int low = -1, up = -1;
        if (i != -1) {
            low = up = i;
            int temp = low;
            do {
                low = temp;
                temp = binarySearch(A, 0, temp-1, target);
            } while (temp != -1);

            temp = up;
            do {
                up = temp;
                temp = binarySearch(A, temp+1, n-1, target);
            } while (temp != -1);
        }

        res.push_back(low);
        res.push_back(up);

        return res;
    }

    int binarySearch(int A[], int low, int up, int target) {
        while (low <= up) {
            int mid = low + (up-low)/2;        
            if (A[mid] == target)
                return mid;
            if (A[mid] > target)
                up = mid - 1;
            if (A[mid] < target)
                low = mid + 1;
        }
        return -1;
    }
};
