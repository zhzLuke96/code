/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ""
    if (strs.length === 1) return strs[0]
    if (strs.indexOf("") !== -1) return ""
    let end = 0;
    while (true) {
        let temp = strs[0][end]
        let outFlag = false
        for (let i = 0; i < strs.length; i++) {
            const st = strs[i];
            if (end >= st.length) {
                outFlag = true;
                break;
            }
            const cha = st[end]
            if (cha !== temp) {
                outFlag = true;
                break;
            }
        }
        if (outFlag) break
        end++;
    }
    return strs[0].substring(0, end)
};


console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
console.log(longestCommonPrefix([""]))
console.log(longestCommonPrefix(["", ""]))
console.log(longestCommonPrefix(["c", "c"]))