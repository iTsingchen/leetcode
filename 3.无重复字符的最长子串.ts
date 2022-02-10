/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const char_map = new Map<string, number>();

  let length = 0;
  let startIndex = 0;

  for (let endIndex = 0; endIndex < s.length; endIndex++) {
    const char = s[endIndex];

    if (char_map.has(char) && char_map.get(char) >= startIndex) {
      startIndex = char_map.get(char)! + 1;
    }

    length = Math.max(length, endIndex - startIndex + 1);

    char_map.set(char, endIndex);
  }

  return length;
}
// @lc code=end
