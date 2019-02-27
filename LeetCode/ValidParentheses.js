// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const BRACKETS_PAIR = {
        ']' : '[',
        '}' : '{',
        ')' : '('
    }
    
    // using Stack Concept
    let stack = [];
    
    if (s === '') return true;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
            if (stack.length === 0 || stack[stack.length - 1] !== BRACKETS_PAIR[s[i]]) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    
    return stack.length === 0;
};