/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
    if (A.length < 3) return false
    for (let i = 1; i < A.length - 1; i++) {
        if (isMountainTop(i)) return true
    }
    return false

    function isMountainTop(index) {
        let temp = null;
        for (let i = 0; i < index + 1; i++) {
            const num = A[i];
            if (temp !== null && num <= temp) return false
            temp = num
        }
        temp = null;
        for (let i = index; i < A.length; i++) {
            const num = A[i];
            if (temp !== null && num >= temp) return false
            temp = num
        }
        return true
    }
};

console.log(validMountainArray([2, 1]))
console.log(validMountainArray([3, 5, 5]))
console.log(validMountainArray([0, 3, 2, 1]))
console.log(validMountainArray([2, 0, 2]))