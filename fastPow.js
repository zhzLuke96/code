/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let N = n
    if (N < 0) {
        x = 1 / x
        N = -N
    }
    return fastPow(x, N)

    function fastPow(x, n) {
        if (n === 0) return 1
        const half = fastPow(x, ~~(n / 2))
        if (n % 2 === 0) return half * half
        return half * half * x
    }
};