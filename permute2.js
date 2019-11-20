/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const size = nums.length
    if (size === 0) return []
    let state = 0
    const used = i => ((state >> i) & 1) === 0
    let res = []
    nums = nums.sort()
    dfs(0, [])
    return res

    function dfs(index, pre) {
        if (index === size) {
            res.push(pre.slice())
            return
        }
        for (let i = 0; i < size; i++) {
            if (used(i)) {
                if (i > 0 && nums[i] === nums[i - 1] && used(i - 1)) {
                    continue
                }
                state ^= (1 << i)
                pre.push(nums[i])
                dfs(index + 1, pre)
                pre.pop()
                state ^= (1 << i)
            }
        }
    }
};