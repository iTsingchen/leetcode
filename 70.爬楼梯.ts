/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number, cache = new Map<number, number>()): number {
  /**
   * 递归法
   */
  // if (n === 1) return 1;
  // if (n === 2) return 2;

  // if (cache.has(n)) return cache.get(n);

  // const result = climbStairs(n - 1, cache) + climbStairs(n - 2, cache);
  // cache.set(n, result);

  // return result;

  /**
   * 循环法
   */
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prevStep1 = 1;
  let prevStep2 = 1;

  for (let i = 3; i <= n; i++) {
    [prevStep1, prevStep2] = [prevStep2 + prevStep1, prevStep1];
  }

  return prevStep1 + prevStep2;
}
// @lc code=end
