/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 * 
 * 将问题分解成一个个的子问题
 * f(1): 一种
 * f(2): 1 + 1 或者 2 两种
 * f(3): 1 + 2 / 2 + 1 / 1 + 1 + 1 三种
 * f(3)相当于上一次必须从f(2)或者f(1)走上来
 * 即 f(3) = f(1) + f(2)
 * 同理：f(4)则必须从f(3)或者f(2)走上来
 * 即 f(4) = f(3) + f(2)
 * 
 * 推导出: f(n) = f(n - 1) + f(n - 2)
 * 
 * 时间复杂度 O(n) 空间复杂度 O(1)
 */

// @lc code=start
function climbStairs(n: number): number {
  // p => f(n - 1)
  // l => f(n - 2)
  // r => result
  // n = 1 => return 1
  // n = 2 => r = 1 + 1 = 2, p = 1, l = 2
  let [p, l, r] = [1, 1, 1]
  for (let i = 2; i <= n; i++) {
    r = p + l
    // 改变保存的值
    p = l
    l = r
  }

  return r
};
// @lc code=end

