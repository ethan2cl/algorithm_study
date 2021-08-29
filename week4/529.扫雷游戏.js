"use strict";
/*
 * @lc app=leetcode.cn id=529 lang=typescript
 *
 * [529] 扫雷游戏
 */
// @lc code=start
function updateBoard(board, click) {
    // 棋盘的行、列深度
    var rl = board.length, cl = board[0].length;
    // 棋盘中某一位置 周围8个棋子的坐标
    var dr = [1, 1, 1, -1, -1, -1, 0, 0];
    var dc = [1, 0, -1, 0, 1, -1, 1, -1];
    // 判断是否为边界
    var isBoundy = function (r, c) { return r >= 0 && c >= 0 && r < rl && c < cl; };
    var update = function (r, c) {
        if (!isBoundy(r, c))
            return;
        // 只有点击M或者雷才应该触发
        if (board[r][c] !== 'E')
            return;
        var count = 0;
        for (var i = 0; i < 8; i++) {
            // 查看周围8个棋子
            var nr = r + dr[i];
            var nc = c + dc[i];
            if (isBoundy(nr, nc) && board[nr][nc] === 'M') {
                count++;
            }
        }
        if (count === 0) {
            board[r][c] = 'B';
            for (var i = 0; i < 8; i++) {
                update(r + dr[i], c + dc[i]);
            }
        }
        else {
            board[r][c] = count + '';
        }
    };
    var r = click[0], c = click[1];
    // 第一次就点击到
    if (board[r][c] === 'M') {
        board[r][c] = 'X';
    }
    else {
        update(r, c);
    }
    return board;
}
;
// @lc code=end
