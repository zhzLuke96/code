/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root, low = -Infinity, upper = Infinity) {
    if (!root) return true
    if (root.val >= upper) return false
    if (root.val <= low) return false
    return isValidBST(root.left, low, root.val) && isValidBST(root.right, root.val, upper)
};

isValidBST({
    val: 5,
    left: {
        val: 1
    },
    right: {
        val: 4
    }
})