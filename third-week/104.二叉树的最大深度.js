"use strict";
/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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
 * 遍历比较左右节点的最大值即可，即最深的深度
 * 时间复杂度O(n)
 * 空间复杂度 O(n)
 */
function maxDepth(root) {
    return _recursion(root, 0);
}
;
function _recursion(root, r) {
    if (!root)
        return r;
    return Math.max(_recursion(root.left, r + 1), _recursion(root.right, r + 1));
}
// @lc code=end
