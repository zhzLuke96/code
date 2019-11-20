/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const S = nums.length
    const N = 1 << S
    const res = []
    for (let i = 0; i < N; ++i) {
        const v = [];
        for (let j = 0; j < S; ++j)
            if (i & (1 << j))
                v.push(nums[j]);
        res.push(v);
    }
    return res;
};