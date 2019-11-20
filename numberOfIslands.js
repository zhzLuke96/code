/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (grid.length === 0) return 0

    let islandsCount = 0
    for (const rowi in grid) {
        const row = grid[rowi]
        for (const coli in row) {
            const coln = row[coli];
            if (coln !== '1') continue
            islandsCount++;
            dfs(Number(rowi), Number(coli));
        }
    }
    return islandsCount

    function dfs(rowi, coli) {
        grid[rowi][coli] = "0"
        if (grid[rowi - 1] && grid[rowi - 1][coli] === "1") dfs(rowi - 1, coli)
        if (grid[rowi + 1] && grid[rowi + 1][coli] === "1") dfs(rowi + 1, coli)
        if (grid[rowi][coli - 1] === "1") dfs(rowi, coli - 1)
        if (grid[rowi][coli + 1] === "1") dfs(rowi, coli + 1)
    }
};

console.log(numIslands(
    [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"]
    ]))