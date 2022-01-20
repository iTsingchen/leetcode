/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const scans = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (scans.has(diff)) {
      return [scans.get(diff), i];
    } else {
      scans.set(nums[i], i);
    }
  }
}
// @lc code=end
