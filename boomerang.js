const lite_distance = (a, b) => (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1])
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    let hash = {};
    const N = points.length;
    let count = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (i === j) continue;
            const dis = lite_distance(points[i], points[j]);
            if (hash[dis] !== undefined) {
                count += hash[dis] * 2;
                hash[dis] += 1;
            } else {
                hash[dis] = 1;
            }
        }
        hash = {};
    }
    return count;
};

const res = numberOfBoomerangs([
    [0, 0],
    [1, 0],
    [2, 0]
])
console.log(res)

const res2 = numberOfBoomerangs([
    [0, 0],
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
])
console.log(res2)