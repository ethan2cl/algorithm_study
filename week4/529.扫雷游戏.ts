/*
 * @lc app=leetcode.cn id=529 lang=typescript
 *
 * [529] 扫雷游戏
 */

// @lc code=start
function updateBoard(board: string[][], click: number[]): string[][] {
  // 棋盘的行、列深度
  const rl = board.length, cl = board[0].length
  // 棋盘中某一位置 周围8个棋子的坐标
  const dr = [1, 1, 1, -1, -1, -1, 0, 0]
  const dc = [1, 0, -1, 0, 1, -1, 1, -1]
  // 判断是否为边界
  const isBoundy = (r: number, c: number): boolean => r >= 0 && c >= 0 && r < rl && c < cl
  
  const update = (r: number, c: number): void => {
    if (!isBoundy(r, c)) return
    // 只有点击M或者雷才应该触发
    if (board[r][c] !== 'E') return

    let count = 0
    for (let i = 0; i < 8; i++) {
      // 查看周围8个棋子
      const nr = r + dr[i]
      const nc = c + dc[i]
      if (isBoundy(nr, nc) && board[nr][nc] === 'M') {
        count++
      }
    }

    if (count === 0) {
      board[r][c] = 'B'
      for (let i = 0; i < 8; i++) {
        update(r + dr[i], c + dc[i])
      }
    } else {
      board[r][c] =count + ''
    }
  }

  const [r, c] = click
  // 第一次就点击到
  if (board[r][c] === 'M') {
    board[r][c] = 'X'
  } else {
    update(r, c)
  }

  return board
};
// @lc code=end

