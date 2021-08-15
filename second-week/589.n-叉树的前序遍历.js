"use strict";
/*
 * @lc app=leetcode.cn id=589 lang=typescript
 *
 * [589] N 叉树的前序遍历
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
function preorder(root) {
    let result = [];
    dfs(root, result);
    return result;
}
;
/**
 * 深度优先
 */
function dfs(root, result) {
    if (!root)
        return;
    // 加入根节点
    result.push(root.val);
    // 循环遍历其他子节点
    if (root.children.length) {
        for (let i = 0; i < root.children.length; i++) {
            dfs(root.children[i], result);
        }
    }
}
// @lc code=end
