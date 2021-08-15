/*
 * @lc app=leetcode.cn id=429 lang=typescript
 *
 * [429] N 叉树的层序遍历
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

/**
 * 广度优先的思想，每一层遍历完，再开始遍历下一层
 * 由队列维护读取节点的顺序，先进的先出
 */
function levelOrder(root: Node | null): number[][] {
  // 返回值
  let result: number[][] = []
  // 边界
  if (!root) return result
	// 由一个队列来维护下一个要读取的节点
  let queue: Node[] = []
  // 根节点入队
  queue.push(root)
  while (queue.length) {
    let len = queue.length
    // 每一层添加一个数组 存放val
    result.push([])
    while (len) {
      // 出队
      const node = queue.shift()
      result[result.length - 1].push(node.val)
      // 当前节点的子节点入队 保证外层while循环可以继续戏曲
      for (let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i])      
      }
      len--
    }
  }
  return result
};
// @lc code=end

