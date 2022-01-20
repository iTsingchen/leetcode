/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let result = new ListNode();

  let last = result;
  let node1 = list1;
  let node2 = list2;

  while (node1 && node2) {
    if (node1.val < node2.val) {
      last.next = node1;
      node1 = node1.next;
    } else {
      last.next = node2;
      node2 = node2.next;
    }
    last = last.next;
  }

  if (node1) {
    last.next = node1;
  }

  if (node2) {
    last.next = node2;
  }

  return result.next;
}
// @lc code=end
