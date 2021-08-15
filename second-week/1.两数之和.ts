/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

/**
 * 时间复杂度O(n) 空间复杂度O(nums.length)
 */
// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  // 缓存 记录出现过的数字
  let hash: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++) {
    // 小心这里不能简写为 if(nums[target = nums[i]]) 可能差值是0
    const c = target - nums[i]
    
    if (hash[c] !== undefined) {
      return [hash[c], i]
    }
    // 未出现 将当前值作为key，索引作为value记录
    hash[nums[i]] = i
  }

  return [-1, -1]
};
// @lc code=end

