/*
 * @lc app=leetcode.cn id=221 lang=typescript
 *
 * [221] 最大正方形
 * dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
 * 
 * 
 * 时空复杂度: O(n^2) O(n^2)
 */

// @lc code=start
function maximalSquare(matrix: string[][]): number {
  const row = matrix.length
  if (!row) return 0
  const column = matrix[0].length
  // dp数组初始化 为了避免边界条件判断，可以将 dp 数组的长和宽都增加 1。
   const dp = new Array(row + 1).fill(0).map(() => new Array(column + 1).fill(0))

  let max = 0
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
        max = Math.max(dp[i][j], max)
      }
    }
  }

  return max * max
};
// @lc code=end

