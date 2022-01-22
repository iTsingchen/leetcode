/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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

function reverseList(head: ListNode | null): ListNode | null {
  let previous = null;
  let current = head;

  while (current) {
    const next = current.next;

    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}

function isPalindrome(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let node1 = reverseList(slow);
  let node2 = head;

  while (node1 && node2) {
    if (node1.val !== node2.val) return false;

    node1 = node1.next;
    node2 = node2.next;
  }

  return true;
}
// @lc code=end
