/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

function detectCycle(head: ListNode | null): ListNode | null {
  /**
   * https://leetcode-cn.com/problems/linked-list-cycle/
   *
   * Step1: 参考【141题】环形链表，找到相遇时刻的那一个节点
   * 快慢指针形成追及问题
   */
  let slow = head;
  let fast = head;

  while (true) {
    if (!fast || !fast.next) return null;

    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) break;
  }

  /**
   * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
   *
   * Step1: 参考【161题】相交链表，查找相交位置的点
   * 假设非环部分的长度是 S1, 环部分的长度是 S2。
   * 慢指针总共行走的路程 S1 + mS2，
   * 此时让慢指针再往前行走 S1 的长度，慢指针将会回到环的起点
   */
  fast = head;
  while (slow !== fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return fast;
}
// @lc code=end
