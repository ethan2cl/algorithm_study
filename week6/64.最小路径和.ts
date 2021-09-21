/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 * 
 * dp公式
 * sum = grid[i][j] + min(grid[i-1][j], grid[i, j-1])
 * 
 * 时空复杂度：O(n^2) O(0)没有开辟额外的空间
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  const row = grid.length
  const column = grid[0].length

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (i === 0 && j === 0) continue
      // 处理第一行和第一列
      else if (i === 0) {
        grid[i][j] += grid[i][j-1]
      } else if (j === 0) {
        grid[i][j] += grid[i-1][j]
      } else {
        // 开始dp
        grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1])
      }
    }
  }

  return grid[row - 1][column -1]
};
// @lc code=end

