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
var reverseList = function (head) {
    let node = head
    let last = null
    while (node) {
        const nxt = node.next
        if (!nxt) {
            node.next = last
            last = node
            break
        }
        const nxtnxt = nxt.next
        nxt.next = node
        node.next = last
        last = nxt
        node = nxtnxt
    }
    return last
};