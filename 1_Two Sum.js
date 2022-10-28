/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function (nums, target) {
    let nums_map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let another = target - nums[i]
        if (nums_map.has(another)) {
            return [i, nums_map.get(another)]
        }
        nums_map.set(nums[i], i)
    }
    return null;
};

var nums = [2,7,11,15], target = 9

var result = twoSum(nums,target);

console.log(result);