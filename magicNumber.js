/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var nthMagicalNumber = function (N, A, B) {
    let count = 0;
    let temp = 1;
    while (true) {
        const an = temp % A
        const bn = temp % B
        if (an === 0 && bn === 0) {
            count++;
            if (count === N) return temp % (10 ** 9 + 7)
            temp++;
        } else if (an === 0) {
            count++;
            if (count === N) return temp % (10 ** 9 + 7)
            temp++;
        } else if (bn === 0) {
            count++;
            if (count === N) return temp % (10 ** 9 + 7)
            temp++;
        } else {
            temp += Math.min(A - an, B - bn);
        }
    }
};

console.log(nthMagicalNumber(5, 2, 4))
console.log(nthMagicalNumber(3, 3, 8))