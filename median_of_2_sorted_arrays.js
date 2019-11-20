/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const l1 = nums1.length
    const l2 = nums2.length
    const lt = l1 + l2
    const m = lt / 2
    let cur1 = 0
    let cur2 = 0
    if (lt % 2 == 1) {
        while (!(cur1 === m || cur2 === m)) {
            if (cur2 === l2) {

            }
            if (nums1[cur1] < nums2[cur2]) cur1++;
            else cur2++;
        }
        if (cur1 === m) {
            return nums1[cur1]
        } else {
            return nums2[cur2]
        }
    }
};

console.log(findMedianSortedArrays([1, 3], [2]))