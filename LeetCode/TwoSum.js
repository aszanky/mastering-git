// https://leetcode.com/problems/two-sum/

// Using Map
var twoSum = function(nums, target) {
    const myMap = new Map();
    let indexLists = [];
    
    for (let i = 0; i < nums.length; i++) {
        comp = target - nums[i];
        if (myMap.has(comp)) {
            indexLists.push(myMap.get(comp), i);
        }
        myMap.set(nums[i], i);
    }
    
    return indexLists;
};
