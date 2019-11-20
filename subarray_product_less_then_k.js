/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) return 0
    let ans = 0;
    let l = 0;
    let prod = 1;
    const N = nums.length;
    for (let r = 0; r < N; r++) {
        const n = nums[r];
        prod *= n;
        while (prod >= k) {
            prod /= nums[l];
            l++;
        }
        ans += r - l + 1;
    }
    return ans;
};

console.log(numSubarrayProductLessThanK([1, 2, 3], 0))