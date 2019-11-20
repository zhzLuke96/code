/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function (s, queries) {
    return queries.map(([start, end, step]) => canMakePali(s.substring(start, end + 1), step))

    function canMakePali(subs, step) {
        if (subs.length === 1) return true
        if (subs.length / 2 <= step) return true
        let dict = []
        for (const w of subs) {
            const idx = w.charCodeAt() - 97
            dict[idx] = !dict[idx]
        }
        let count = 0;
        dict.map(v => v ? count++ : void(0))
        let need = subs.length % 2 === 0 ? ~~(count / 2) : ~~((count - 1) / 2)
        return need <= step
    }
};



console.log(canMakePaliQueries("abcda", [
    [3, 3, 0],
    [1, 2, 0],
    [0, 3, 1],
    [0, 3, 2],
    [0, 4, 1]
]))