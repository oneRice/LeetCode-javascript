LeetCode OJ
Problems 
Pick One!
Submissions
Discuss
Book
Articles
  oneRice
Spiral Matrix II Total Accepted: 24309 Total Submissions: 77167 My Submissions Question Solution 
Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
Show Tags
Have you met this question in a real interview? Yes  No
Discuss



1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
class Solution {
public:
    vector<vector<int>> generateMatrix(int n) {
        vector<int> zeroRow (n, 0);
        vector<vector<int>> res (n, zeroRow);
        int row = 0, column = 0, dir = 0, incre = 0, layer = 0;
        for (int i = 1; i <= n*n; i++) {
            res[column][row] = i;
            if (dir == 0) {
                if (incre == 0) {
                    if (row + 1 < n - layer) {
                        row ++;
                        continue;
                    } else {
                        dir = 1;
                        column ++;
                        continue;
                    }
                } else {
                    if (row > layer) {
                        row --;
                        continue;
                    } else {
                        dir = 1;
                        column --;
                        continue;
                    }
                }
            } else {
                if (incre == 0) {
                    if (column + 1 < n - layer) {
                        column ++;
                        continue;
                    } else {
                        dir = 0;
                        incre = 1;
                        row--;
                        continue;
                    }
                } else {
                    if (column > layer + 1) {
                        column --;
                        continue;
                    } else {
                        dir = 0;
                        incre = 0;
                        row ++;
                        layer ++;
                        continue;
                    }
                }
            }
        }
        return res;
    }
};
Submit Solution
Submission Result: AcceptedMore Details 

Share your acceptance!

Frequently Asked Questions | Terms of Service



Copyright © 2015 LeetCode

Send Feedback
