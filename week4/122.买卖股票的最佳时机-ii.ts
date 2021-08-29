/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let count = 0
  for (let i = 1; i < prices.length; i++) {
    const c = prices[i] - prices[i - 1]
    c > 0 && (count += c)
  }

  return count
};
// @lc code=end

