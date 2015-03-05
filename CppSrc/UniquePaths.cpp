class Solution {
public:
    int factorial(int n) {
        int res = 1;
        for (int i = 1; i <= n; i++) {
            res *= i;
        }
        return res;
    }

    int calcC(int all, int sub) {
        long int sum = 1;
        for (int i = 0; i < sub; i++) {
            sum *= all;
            all--;
        }
        return sum/factorial(sub);
    }

    int uniquePaths(int m, int n) {
        if (m < 1 && n < 1)
            return 0;
        int min = (m < n)? m: n;
        return calcC(m+n-2, min-1);
    }
};
