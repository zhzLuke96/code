/**
 * @param {string} str
 * @return {number}
 */
const re = /^\s*?([-+]?)(\d+)/;
const INT_MAX = 2147483648
var myAtoi = function (str) {
    if (str.length === 0) return 0;
    const match = re.exec(str);
    if (!match) return 0;
    const prefix = match[1] === "-" ? -1 : 1;
    const num = Number(match[2]);
    if (prefix === -1) {
        if (num > INT_MAX) return prefix * INT_MAX;
        return prefix * num;
    } else {
        if (num > INT_MAX - 1) return prefix * (INT_MAX - 1);
        return prefix * num;
    }
};