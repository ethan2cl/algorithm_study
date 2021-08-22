/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 * 
 * 时间复杂度 & 空间复杂度 O(n)
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  const len = nums.length
  // 比这个数字多的数字就是出现次数
  const limit = len >> 1
  const hash: Record<number, number> = {}
  for (let i = 0; i < len; i++) {
    hash[nums[i]] = hash[nums[i]] === undefined ? 1 : hash[nums[i]] + 1
    if (hash[nums[i]] > limit) return nums[i]
  }

};
// @lc code=end

