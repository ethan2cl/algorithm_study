"use strict";
/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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
 * 遍历顺序 left => root => right
 */
function inorderTraversal(root) {
    let result = [];
    inorder(root, result);
    return result;
}
;
function inorder(root, result) {
    if (!root)
        return;
    inorder(root.left, result);
    result.push(root.val);
    inorder(root.right, result);
}
// @lc code=end
