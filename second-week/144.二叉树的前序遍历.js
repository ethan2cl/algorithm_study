"use strict";
/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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
 * 先序遍历 根节点 => 左子树 => 右子树
 * 子树右节点的继续先遍历字树的 root => left => right
 * 所以按照这顺序递归遍历即可
 */
function preorderTraversal(root) {
    let result = [];
    preorder(root, result);
    return result;
}
;
/**
 * 先序遍历函数 -- recursion
 * 一层层递归下去，读取顺序就是 root => left => right
 * 在叶子节点处，相当于左右子树皆为null
 * @param root 待读取的节点
 * @param result 最终读取结果
 * @returns
 */
function preorder(root, result) {
    // 1、处理边界
    if (!root)
        return;
    // 加入根节点 如果左右子树都是null
    result.push(root.val);
    // 左子树
    preorder(root.left, result);
    // 右子树
    preorder(root.right, result);
}
// @lc code=end
