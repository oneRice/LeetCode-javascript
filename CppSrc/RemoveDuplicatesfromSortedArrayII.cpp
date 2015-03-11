class Solution {
public:
    int removeDuplicates(int A[], int n) {
        if(n <= 2) return n;
        vector<int> temp;
        temp.push_back(A[0]);
        temp.push_back(A[1]);
        for(int i = 2; i < n; i++) {
            if(A[i] != A[i-1] || A[i] != A[i-2]) {
                temp.push_back(A[i]);
            }
        }

        for (int i = 0; i < temp.size(); ++i) {
            A[i] = temp[i];
        }
        
        return temp.size();
    }
};
