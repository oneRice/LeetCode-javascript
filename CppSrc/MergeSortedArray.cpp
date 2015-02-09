class Solution {
public:
    void merge(int A[], int m, int B[], int n) {
        vector<int> temp;
        int idA = 0, idB = 0;
        while(idA != m && idB != n) {
            if(A[idA] < B[idB]) {
                temp.push_back(A[idA]);
                idA++;
            } else {
                temp.push_back(B[idB]);
                idB++;
            }
        }
        if(idA == m) {
            while(idB != n) {
                temp.push_back(B[idB]);
                idB++;
            }
        } else {
            while(idA != m) {
                temp.push_back(A[idA]);
                idA++;
            }
        }
        for(int i = 0; i < temp.size(); i++) {
            A[i] = temp[i];
        }
        return;
    }
};
