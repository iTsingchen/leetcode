/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
  carry = 0
): ListNode | null {
  if (!l1 && !l2) return carry ? new ListNode(carry) : null;

  const val1 = l1?.val ?? 0;
  const val2 = l2?.val ?? 0;

  const sum = val1 + val2 + carry;

  return new ListNode(
    sum >= 10 ? sum - 10 : sum,
    addTwoNumbers(l1?.next, l2?.next, sum >= 10 ? 1 : 0)
  );
}
// @lc code=end
