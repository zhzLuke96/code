const keywords = [
    "qwertyuiop".split(""),
    "asdfghjkl".split(""),
    "zxcvbnm".split(""),
]

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    return words.filter(word => {
        const base = keywordLevel(word[0]);
        for (const w of word) {
            if (base !== keywordLevel(w)) {
                return false
            }
        }
        return true
    })

    function keywordLevel(w) {
        w = w.toLowerCase();
        for (let i = 0; i < keywords.length; i++) {
            const ws = keywords[i];
            if (ws.indexOf(w) !== -1) {
                return i
            }
        }
        return -1
    }
};



console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))
// ["Alaska", "Dad"]