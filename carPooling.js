/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    let temp = []
    for (const trip of trips) {
        const [c, s, e] = trip
        for (let i = s; i < e; i++) {
            if (temp[i]) {
                temp[i] += c
                if (temp[i] > capacity) return false
            } else {
                temp[i] = c
            }
        }
    }
    return true
};

console.log(carPooling([
    [2, 1, 5],
    [3, 3, 7]
], 4)) // => false
console.log(carPooling([
    [2, 1, 5],
    [3, 3, 7]
], 5)) // => true
console.log(carPooling([
    [7, 5, 6],
    [6, 7, 8],
    [10, 1, 6]
], 16)) // => false
console.log(carPooling([
    [9, 3, 6],
    [8, 1, 7],
    [6, 6, 8],
    [8, 4, 9],
    [4, 2, 9]
], 28)) // => false