/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let hash: Record<number, number> = {}
  for (let i = 0; i < nums.length; i += 1) {
    if (hash[target - nums[i]] !== undefined) {
      return [hash[target - nums[i]], i]
    }
    hash[nums[i]] = i
  }
  return [-1, -1]
};
// @lc code=end

