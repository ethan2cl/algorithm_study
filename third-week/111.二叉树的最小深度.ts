/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量
 * 当左子树为null的时候 最近的叶子节点必在右子树
 * 反之右子树为null，最近的叶子节点必在左子树
 * 
 * 如果左右子树同时存在，则递归比较左右那个最小，类比寻找二叉树的最大深度
 * 时间复杂度O(n)
 * 空间复杂度 O(n)
 */

function minDepth(root: TreeNode | null): number {
  return _recursion(root);
};

function _recursion(root: TreeNode | null): number {
  if (!root) return 0;
  if (!root.left) return _recursion(root.right) + 1
  if (!root.right) return _recursion(root.left) + 1
  return Math.min(_recursion(root.left), _recursion(root.right)) + 1;
}
// @lc code=end

