var removeDuplicates = function (nums) {

    let j = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[j] = nums[i];
            j++;
        }
    }
    return j;

    // ======================== Other Solutions ========================

    // for (let i = 0; i < nums.length - 1; i++) {
    //     if (nums[i] == nums[i + 1]) {
    //         nums.splice(i + 1, 1);
    //         i--;
    //     }
    // }
    // return nums.length;

};

var nums = [1, 2, 2]

var result = removeDuplicates(nums);

console.log(result);
console.log(nums);