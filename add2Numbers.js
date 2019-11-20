function ListNode(val) {
    this.val = val;
    this.next = null;
}

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
var addTwoNumbers = function (l1, l2) {
    const ret = new ListNode(0);
    let cur = ret
    let carry = 0;
    while (l1 || l2) {
        let a = l1 ? l1.val : 0;
        let b = l2 ? l2.val : 0;
        let sum = a + b + carry;

        carry = ~~(sum / 10);
        sum = sum % 10;
        cur.next = new ListNode(sum)

        cur = cur.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    if (carry) {
        cur.next = new ListNode(carry)
    }
    return ret.next
};

console.log(addTwoNumbers({
    val: 5
}, {
    val: 5
}))