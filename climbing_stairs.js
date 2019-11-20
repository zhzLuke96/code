/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const memo = []
    return climb_stairs(0, n)

    function climb_stairs(i, n) {
        if (i > n) return 0
        if (i === n) return 1
        if (memo[i]) return memo[i]
        memo[i] = climb_stairs(i + 1, n) + climb_stairs(i + 2, n)
        return memo[i]
    }
};