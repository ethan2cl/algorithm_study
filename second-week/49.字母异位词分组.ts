/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

/**
 * 这时间复杂度没分析出来，中间夹着一个sort排序
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map()
  for (let i = 0; i < strs.length; i++) {
    // 有length属性可以使用 Array.from
    // 以排序好的字符串为key
    let key = Array.from(strs[i]).sort().toString()
    if (map.get(key)) {
      map.get(key).push(strs[i])
    } else {
      let list = new Array()
      list.push(strs[i])
      map.set(key, list)
    }
  }
  return Array.from(map.values())
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"])
// @lc code=end

