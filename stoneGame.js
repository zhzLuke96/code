/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
    return canWin(0, piles, 0)

    function canWin(a, ps, b) {
        if (ps.length === 0) return a > b
        let sum = ps.reduce((s, v) => s + v)
        if (a > sum + b) return true
        if (b > sum + a) return false
        return canWin(a + ps[0], ps.slice(2), b + ps[1]) ||
            canWin(a + ps[0], ps.slice(1, ps.length - 1), b + ps[ps.length - 1]) ||
            canWin(a + ps[ps.length - 1], ps.slice(1, ps.length - 1), b + ps[0]) ||
            canWin(a + ps[ps.length - 1], ps.slice(0, ps.length - 2), b + ps[ps.length - 2])
    }
};


console.log(stoneGame([5, 3, 4, 5]))