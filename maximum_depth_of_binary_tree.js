/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0
    if (root.left === null && root.right === null) {
        return 1
    }
    if (root.left && root.right) {
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
    }
    if (root.left) {
        return maxDepth(root.left) + 1
    }
    if (root.right) {
        return maxDepth(root.right) + 1
    }
};