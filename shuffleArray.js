/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.init = nums.slice()
    this.solute = nums.slice()
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.init
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    for (let i = 0; i < this.solute.lenght; i++) {
        const ri = (Math.random() * (this.solute.lenght - i)) + i;
        [this.solute[i], this.solute[ri]] = [this.solute[ri], this.solute[i]];
    }
    return this.solute
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

const nums = [1, 2, 3];
const s1 = new Solution(nums);
console.log(s1.shuffle())
console.log(s1.reset())
console.log(s1.shuffle())