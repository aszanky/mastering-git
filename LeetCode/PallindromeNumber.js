// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */

// Solve this problem without convert number to string

var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    
    let revNumber = 0;
    let j = x;
    while(j > 0) {
        revNumber = (revNumber * 10) + (j % 10);
        j = ~~(j/10);
    }
    
    return x === revNumber;
};