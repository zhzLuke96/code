/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const size = nums.length
    if (size === 0) return []
    state = 0
    res = []
    dfs(0, [])
    return res

    function dfs(index, pre) {
        if (index === size) {
            res.push(pre.slice())
            return
        }
        for (let i = 0; i < size; i++) {
            if (((state >> i) & 1) === 0) {
                state ^= (1 << i)
                pre.push(nums[i])
                dfs(index + 1, pre)
                pre.pop()
                state ^= (1 << i)
            }
        }
    }
};