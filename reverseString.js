/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    const l = s.length

    function rev(start) {
        if (start == l - 1 - start) return
        if (start == l - start) return [s[start], s[l - 1 - start]] = [s[l - 1 - start], s[start]]
        rev(start + 1)
    }
    rev(0)
};