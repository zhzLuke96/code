/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const res = []

    function cell(row, col) {
        if (row === col || col === 0) return 1
        if (res[row - 1][col - 1] && res[row - 1][col]) {
            return res[row - 1][col - 1] + res[row - 1][col]
        }
        return cell(row - 1, col - 1) + cell(row - 1, col)
    }
    for (let i = 0; i < numRows; i++) {
        const row = []
        for (let j = 0; j < i + 1; j++) {
            row.push(cell(i, j))
        }
        res.push(row)
    }
    return res
};