/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    function swap(node) {
        if (!node) return node
        if (!node.next) return node
        const onxt = node.next
        node.next = swap(onxt.next)
        onxt.next = node
        return onxt
    }
    return swap(head)
};