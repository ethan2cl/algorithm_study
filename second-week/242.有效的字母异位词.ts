/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * 时间复杂度: O(2n),空间复杂度：O(s.length)
 */
function isAnagram(s: string, t: string): boolean {
  // 1、处理边界
  if (s.length !== t.length) return false

  // 2、使用 hash 存储s中字母出现的速度
  const hash: Record<string, number> = {}
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === undefined) {
      hash[s[i]] = 1
    } else {
      hash[s[i]]++
    }
  }
  // 3、遍历t，一旦在两个字符串长度相等的情况下出现 < 0 的情况，则必然不相等
  for (let i = 0; i < t.length; i++) {
    if (hash[t[i]]) {
      hash[t[i]]--
      if (hash[t[i]] < 0) return false
    } else {
      return false
    }
  }

  return true
};
// @lc code=end

/**
 * 用了好多的系统函数，效率就很低
 */
// function isAnagram(s: string, t: string): boolean {
//   // 1、处理边界
//   if (s.length !== t.length) return false
//   // 2.变成数组后排序，再转变成字符串看是否相等
//   return s.split('').sort().join('') === t.split('').sort().join('')
// };