"use strict";
/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */
// @lc code=start
function maxProfit(prices) {
    var count = 0;
    for (var i = 1; i < prices.length; i++) {
        var c = prices[i] - prices[i - 1];
        c > 0 && (count += c);
    }
    return count;
}
;
// @lc code=end
