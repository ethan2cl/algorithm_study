"use strict";
/*
 * @lc app=leetcode.cn id=860 lang=typescript
 *
 * [860] 柠檬水找零
 *
 * 时间复杂度：O(n)
 * 空间复杂度: O(1)
 *
 */
// @lc code=start
function lemonadeChange(bills) {
    var five = 0, ten = 0;
    for (var i = 0; i < bills.length; i++) {
        if (bills[i] === 5)
            five++;
        if (bills[i] === 10) {
            five--;
            ten++;
        }
        if (bills[i] === 20) {
            if (ten > 0) {
                ten--;
                five--;
            }
            else {
                five -= 3;
            }
        }
        if (five < 0 || ten < 0)
            return false;
    }
    return true;
}
;
// @lc code=end
