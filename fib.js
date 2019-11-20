/**
 * @param {number} N
 * @return {number}
 */
var fib = memo(function (N) {
    if (N == 0) return 0
    if (N <= 2) return 1
    return fib(N - 1) + fib(N - 2)
});

function memo(fn) {
    const cache = {}
    return (N) => {
        if (cache[N]) return cache[N]
        const res = fn(N)
        cache[N] = res
        return res
    }
}