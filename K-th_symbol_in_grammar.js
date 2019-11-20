/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function (N, K) {
    if (N == 0) return 0
    return kthGrammar(N - 1, ~~((N + 1) / 2)) ? K % 2 : (1 - K % 2)
};

Console.log(kthGrammar(1, 1))
Console.log(kthGrammar(2, 1))