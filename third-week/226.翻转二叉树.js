"use strict";
/*
 * @lc app=leetcode.cn id=226 lang=typescript
 *
 * [226] 翻转二叉树
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
 * 递归 交换左右节点
 * 时间复杂度 log(n) 空间复杂度 O(n) 交换过程的temp
 */
function invertTree(root) {
    reverse(root);
    return root;
}
;
function reverse(root) {
    if (!root)
        return;
    _swap(root);
    reverse(root.left);
    reverse(root.right);
}
function _swap(root) {
    var temp = root.right;
    root.right = root.left;
    root.left = temp;
}
// @lc code=end
