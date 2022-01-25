/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
  const depth = (root: TreeNode | null): number => {
    if (root === null) return 0;

    const leftDepth = depth(root.left);
    const rightDepth = depth(root.right);

    if (
      leftDepth === -1 ||
      rightDepth === -1 ||
      Math.abs(leftDepth - rightDepth) > 1
    ) {
      return -1;
    }

    return 1 + Math.max(leftDepth, rightDepth);
  };

  return depth(root) !== -1;
}
// @lc code=end
