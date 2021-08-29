/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 * 岛屿必然由无数个相邻的1组成，我们从[0, 0]开始出发寻找
 * 遇到相邻的1就把他置为0，直到当前岛屿全部置0，继续循环寻找下一个岛屿
 * 
 * 时间复杂度: O(n ^ 2)
 * 空间复杂度: O(n ^ 2) 由dfs递归导致
 * 
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  let isLandNumber = 0
  const rl = grid.length, cl = grid[0].length
  const dfs = (grid: string[][], r: number, c: number): void => {
    // 不满足条件直接退出
    if (r < 0 || c < 0 || r >= rl || c >= cl || grid[r][c] === '0') return
    grid[r][c] = '0'
    dfs(grid, r + 1, c)
    dfs(grid, r, c + 1)
    dfs(grid, r - 1, c)
    dfs(grid, r, c - 1)
  }
  
  for (let r = 0; r < rl; r++) {
      for (let c = 0; c < cl; c++) {
        if (grid[r][c] === '1') {
          dfs(grid, r, c)
          isLandNumber++
        }
      }
  }

  return isLandNumber
};
// @lc code=end

