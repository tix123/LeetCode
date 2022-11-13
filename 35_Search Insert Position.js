/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    let lo = 0;
    let hi = nums.length - 1;

    while (lo <= hi) {
        let mi = Math.floor((lo + hi) / 2);
        if (target > nums[mi]) {
            lo = mi + 1;
        } else if (target < nums[mi]) {
            hi = mi - 1
        }
        else {
            return mi;
        }
    }

    return lo;

    // ======================== Other Solutions ========================    

    // for (let i = 0; i < nums.length; i++) {
    //     if(nums[i] == target){
    //         return i;
    //     }
    //     if(nums[i] > target){
    //         return i;
    //     }
    // }
    // return nums.length
};

var nums = [1, 3, 5, 6 ]

var target = 2

var result = searchInsert(nums, target);

console.log(result);
