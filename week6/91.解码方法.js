"use strict";
/*
 * @lc app=leetcode.cn id=91 lang=typescript
 *
 * [91] 解码方法
 *
 * 基础条件 字符不得为 '0'
 * (1)单个字母解码
 *  f[i] = f[i - 1]
 * (2)两个字符解码
 *  f[i] = f[i - 2]
 *
 * 时空复杂度：O(n) O(n)
 */
// @lc code=start
function numDecodings(s) {
    const n = s.length;
    const f = new Array(n + 1).fill(0);
    f[0] = 1;
    for (let i = 1; i <= n; i++) {
        if (s[i - 1] !== '0') {
            f[i] += f[i - 1];
        }
        // 从第二个字符开始解码，且两个字符的数字必须小于26
        if (i > 1 && s[i - 2] !== '0' && (+s[i - 2] - (+'0') * 10 + (+s[i - 1] - (+'0')) <= 26)) {
            f[i] += f[i - 2];
        }
    }
    return f[n];
}
;
// @lc code=end
