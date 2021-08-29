/*
 * @lc app=leetcode.cn id=45 lang=typescript
 *
 * [45] 跳跃游戏 II
 * 
 * 时间 & 空间复杂度： O(n) & O(1)
 */

// @lc code=start
function jump(nums: number[]): number {
  // 当前跳跃能到的边界
  let end = 0
  // 步数
  let steps = 0
  // 当前跳跃所有位置可达的最大巨鹿
  let max = 0
  for (let i = 0; i < nums.length - 1; i++) {

    max = Math.max(max, i + nums[i])
    if (i === end) {
      end = max
      steps++
    }
  }

  return steps
};
// @lc code=end

