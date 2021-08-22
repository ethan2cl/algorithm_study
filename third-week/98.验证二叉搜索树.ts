/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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
 * 时间复杂度 O(n) => 每个节点都会被访问一次
 * 空间复杂度 O(n) => 递归函数生成的调用栈
 */

function isValidBST(root: TreeNode | null): boolean {
  // 根节点非 null 必为true
  return _recursion(root, -Infinity, Infinity)
};

/**
 * @param lower 记录每次递归中的最小值
 * @param upper 记录每次递归中的最大值
 */
function _recursion (root: TreeNode | null, lower: number, upper: number): boolean {
  if (!root) return true
  if (root.val <= lower || root.val >= upper) {
    return false
  }
  // 只有左右子树都为true 表示左右子树都满足条件
  // 遍历左子树，min => lower, 最大值不超过当前节点
  // 遍历右子树，max => upper, 最小值不小过当前节点
  return _recursion(root.left, lower, root.val) && _recursion(root.right, root.val, upper)
}
// @lc code=end

