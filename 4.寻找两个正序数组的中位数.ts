/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums: number[] = [];

  // 复杂度为 O(m + n)，不符合题目要求
  while (nums1.length && nums2.length) {
    if (nums1[0] < nums2[0]) {
      nums.push(nums1.shift());
    } else {
      nums.push(nums2.shift());
    }
  }

  if (nums1.length) {
    nums.push(...nums1);
  }
  if (nums2.length) {
    nums.push(...nums2);
  }

  const middleIndex = (nums.length - 1) / 2;
  return middleIndex % 1 === 0
    ? nums[middleIndex]
    : (nums[middleIndex - 0.5] + nums[middleIndex + 0.5]) / 2;
}
// @lc code=end
