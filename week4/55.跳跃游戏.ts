/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n) 
 * 
 */

// @lc code=start
function canJump(nums: number[]): boolean {
 let max = 0
 for (let i = 0; i < nums.length; i++) {
  // max没有当前索引大，则必然跳不过去
  if (i > max) return false
  // max为
  max = Math.max(max, i + nums[i])
  // max大于最后元素的索引则代表一定可以走到
  if (max > nums.length - 1) return true
 }
 return false
};
// @lc code=end

