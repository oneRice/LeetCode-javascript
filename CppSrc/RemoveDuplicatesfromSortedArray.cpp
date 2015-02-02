class Solution {
public:
    int removeDuplicates(int A[], int n) {
        if(n <= 1) return n;
        int pos = 0;
        for(int searchIndex = 0; searchIndex < n-1; searchIndex++) {
            if(A[searchIndex] != A[searchIndex+1])
                A[++pos] = A[searchIndex+1];
        }
        return ++pos;
    }
};
