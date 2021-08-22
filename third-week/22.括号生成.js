"use strict";
/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 * 回溯 剪枝（减去生成的无效的括号）
 * 剪枝前，生成的数组长度理论上是 2^n
 * 每一次可能加的是 '(' 也可能是 ')'，相当于一种生成二叉树的过程
 * 每次子树伸展出去就是两种结果
 *
 * 时间复杂度是O(logn)指数级的 空间复杂度O(2 ^ n)
 */
// @lc code=start
function generateParenthesis(n) {
    var result = [];
    // 开始递归
    _recursion(0, 0, n, result, '');
    return result;
}
;
/**
 * 递归添加括号
 * @param left 已添加的左括号个数
 * @param right 已添加的右括号个数
 * @param n 括号对数
 * @param result 保存添加的字符串
 * @param s 生成的括号字符串
 */
function _recursion(left, right, n, result, s) {
    // 递归出口
    if (left === n && right === n) {
        result.push(s);
        return;
    }
    // 添加左括号
    // 剪枝条件: 添加左括号必须保证左括号不是最后一个
    if (left < n)
        _recursion(left + 1, right, n, result, s + '(');
    // 添加右括号
    // 剪枝条件: 必须左括号的数量比右括号的数量多
    if (left > right)
        _recursion(left, right + 1, n, result, s + ')');
}
// @lc code=end
