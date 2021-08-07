/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let hash: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++) {
      const result = target - nums[i]
      if (hash[result]) {
          return [i, hash[result]]
      } else {
          hash[nums[i]] = i
      }
  }
  return [0, 1]
};
// @lc code=end

