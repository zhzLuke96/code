/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const matrix = [];
    for (let i = 0; i < n; i++)
        matrix.push(Array(n));
    let u = 0;
    let d = n - 1;
    let l = 0;
    let r = n - 1;
    let num = 1;

    while (true) {
        for (let i = l; i <= r; i++) matrix[u][i] = num++;
        if (u++ >= d) break;
        for (let i = u; i <= d; i++) matrix[i][r] = num++;
        if (r-- <= l) break;
        for (let i = r; i >= l; i--) matrix[d][i] = num++;
        if (d-- <= u) break;
        for (let i = d; i >= u; i--) matrix[i][l] = num++;
        if (l++ >= r) break;
    }
    return matrix;
};