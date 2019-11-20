/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let cur = 0
    let len = s.length
    return walkscope(1)

    function walkscope(repeat) {
        let res = ""
        let nums = ""
        while (cur < len) {
            let char = s[cur]
            cur++;
            if (!isNaN(char)) {
                nums += char
            } else if (char === "[") {
                res += walkscope(Number(nums))
                nums = ""
            } else if (char === "]") {
                return res.repeat(repeat)
            } else {
                res += char
            }
        }
        return res.repeat(repeat)
    }
};


console.log(decodeString("3[a]2[bc]"))
console.log(decodeString("3[a2[c]]"))
console.log(decodeString("2[abc]3[cd]ef"))