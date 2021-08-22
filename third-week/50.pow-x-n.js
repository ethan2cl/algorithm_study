"use strict";
/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 * 分治思想
 * 2^10 => 2^5 * 2^5
 * 2^5 = 2^2 * 2^2 * 2
 *
 * 偶数直接分开，奇数需要转换成偶数
 *
 * 时间复杂度 & 空间复杂度: O(logn)
 */
// @lc code=start
function myPow(x, n) {
    if (n === 0)
        return 1;
    if (n < 0)
        return 1 / myPow(x, -n);
    // 奇数
    if (n % 2)
        return x * myPow(x, n - 1);
    return myPow(x * x, n / 2);
}
;
// @lc code=end
