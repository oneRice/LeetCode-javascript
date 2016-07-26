var findPara = function (arr, num) { 
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === num) {
      return arr[i][1];
    }
  }
  return 'unfound';
};

var solution_name = [['001', 'twoSum'],
                     ['002', 'addTwoNumbers'],
                     ['003', 'lengthOfLongestSubstring'],
                     ['004', 'findMedianSortedArrays'],
                     ['005', 'longestPalindrome'],
                     ['006', 'convert'],
                     ['007', 'reverse'],
                     ['008', 'myAtoi'],
                     ['009', 'isPalindrome'],
                     //['010', ''],
                     ['011', 'maxArea'],
                     ['012', 'intToRoman'],
                     ['013', 'romanToInt'],
                     ['014', 'longestCommonPrefix'],
                     ['015', 'threeSum'],
                     ['292', 'canWinNim'],
                     ['338', 'countBits'],
                     ['344', 'reverseString']
                     ];
                     
var solution_type = [['002', ['ListNode']]];
               
exports.solution_name = solution_name;
exports.solution_type = solution_type;
exports.findPara = findPara;