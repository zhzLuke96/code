/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1
    let head;
    if (l1.val < l2.val) {
        head = l1
        l1 = l1.next
    } else {
        head = l2
        l2 = l2.next
    }
    head.next = mergeTwoLists(l1, l2)
    return head
};