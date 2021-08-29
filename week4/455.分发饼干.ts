/*
 * @lc app=leetcode.cn id=455 lang=typescript
 *
 * [455] 分发饼干
 * 时间复杂度：O(mlogm + nlogn)
 * 空间复杂度：O(logm + logn)
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let count = 0;
  for (let i = 0, j = 0; i < g.length && j < s.length; i++, j++) {
      // 将s指针移动到合适的位置
      while (j < s.length && g[i] > s[j]) {
          j++;
      }
      if (j < s.length) {
          count++;
      }
  }
  return count;
};
// @lc code=end

