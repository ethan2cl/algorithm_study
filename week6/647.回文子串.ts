/*
 * @lc app=leetcode.cn id=647 lang=typescript
 *
 * [647] 回文子串
 * 
 * 中心拓展
 */

// @lc code=start
function countSubstrings(s: string): number {
  const n = s.length;
  let ans = 0;
  // 长度扩充,考虑到奇数和偶数两种情况
  for (let i = 0; i < 2 * n - 1; ++i) {
    let l = i / 2, r = i / 2 + i % 2;
    while (l >= 0 && r < n && s.charAt(l) === s.charAt(r)) {
      --l;
      ++r;
      ++ans;
    }
  }
  return ans
};
// @lc code=end

