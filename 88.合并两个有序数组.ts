/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let index1 = m - 1;
  let index2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (index2 < 0) {
      break;
    } else if (nums1[index1] > nums2[index2]) {
      nums1[i] = nums1[index1--];
    } else {
      nums1[i] = nums2[index2--];
    }
  }
}
// @lc code=end
