"use strict";
/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 *
 * 已经看不懂了。后面回溯这块太绕了，解决不了，需要加强练习
 */
// @lc code=start
function letterCombinations(digits) {
    // 对应关系
    var letter = [
        "",
        "",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz", // 9
    ];
    var left = [], result = [];
    // 根据按键找到对应关系
    for (var i = 0; i < digits.length; i++) {
        left.push(letter[parseInt(digits[i])]);
    }
    var add = function (left, sum) {
        var res = sum;
        if (left.length) {
            var first = left[0];
            for (var i = 0; i < first.length; i++) {
                res += first[i];
                var tempLeft = left.shift();
                add(left, res);
                // 开始回溯
                tempLeft && left.unshift(tempLeft);
                res = res.slice(0, res.length - 1);
            }
        }
        else {
            if (sum.length === digits.length) {
                result.push(sum);
            }
        }
    };
    add(left, '');
    return result;
}
;
// @lc code=end
