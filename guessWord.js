/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function (wordlist, master) {
    let word = wordlist[0];
    let score = master.guess(word);
    if (score < word.length) {
        wordlist = wordlist.filter(item => item != word && guessEx(word, item) == score);
        findSecretWord(wordlist.reverse(), master);
    }
};

function guessEx(a, b) {
    let i = 0,
        cnt = 0;
    while (i < a.length && i < b.length) {
        if (a[i] == b[i]) cnt++;
        i++
    }
    return cnt;
}