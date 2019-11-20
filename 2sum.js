/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hash = {};
    let N = nums.length;
    for (let i = 0; i < N; i++) {
        if (hash[nums[i]] !== undefined) {
            return [i, hash[nums[i]]]
        } else {
            hash[target - nums[i]] = i
        }
    }
};