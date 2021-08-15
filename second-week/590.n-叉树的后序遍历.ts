/*
 * @lc app=leetcode.cn id=590 lang=typescript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */
// 调整加入顺序
function postorder(root: Node | null): number[] {
  let result: number[] = []
  dfs(root, result)
  return result
};

function dfs (root: Node | null, result: number[]): void {
  if (!root) return

  // 循环遍历其他子节点
  if (root.children.length) {
    for (let i = 0; i < root.children.length; i++) {
      dfs(root.children[i], result)
    }
  }

  // 加入根节点
  result.push(root.val)
}
// @lc code=end

