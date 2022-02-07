/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  if (nums.length <= 1) return [nums];

  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    const left = nums.slice(0, i);
    const right = nums.slice(i + 1);

    const tails = permute([...left, ...right]);

    result.push(...tails.map((tail) => [nums[i], ...tail]));
  }

  return result;
}
// @lc code=end
