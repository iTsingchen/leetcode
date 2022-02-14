/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let result = s[0];

  for (let i = 0; i < s.length; i++) {
    let leftIndex = i - 1;
    let rightIndex = i + 1;
    while (
      leftIndex >= 0 &&
      rightIndex <= s.length - 1 &&
      s[leftIndex] === s[rightIndex]
    ) {
      const len = rightIndex - leftIndex + 1;
      result =
        len > result.length ? s.slice(leftIndex, rightIndex + 1) : result;

      leftIndex -= 1;
      rightIndex += 1;
    }

    leftIndex = i;
    rightIndex = i + 1;
    while (
      leftIndex >= 0 &&
      rightIndex <= s.length - 1 &&
      s[leftIndex] === s[rightIndex]
    ) {
      const len = rightIndex - leftIndex + 1;
      result =
        len > result.length ? s.slice(leftIndex, rightIndex + 1) : result;

      leftIndex -= 1;
      rightIndex += 1;
    }
  }
  return result;
}
// @lc code=end
