class Solution {
public:
    int removeElement(int A[], int n, int elem) {
        int length = n;
        int compaired = 0;
        int index = 0;
        while(compaired != n) {
            if(A[index] != elem) {
                index++;
            }else{
                A[index] = A[length - 1];
                A[length - 1] = 0XFFFF;
                length--;
            }
            compaired++;
        }
        return length;
    }
};
