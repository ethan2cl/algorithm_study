/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 旋转数组
 */
// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    // k > 数组长度 直接求余 不用重复反转
    k %= nums.length;
    // 整体反转
    reverse(nums, 0, nums.length - 1);
    // 两部分 分别反转
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}
;
function reverse(nums, start, end) {
    var _a;
    while (start < end) {
        _a = [nums[start], nums[end]], nums[end--] = _a[0], nums[start++] = _a[1];
    }
}
// @lc code=end
/**
 * 第一种 循环 时间复杂度 O(k * n)
 * 时间超出限制
 */
// function rotate(nums: number[], k: number): void {
//   for (let i = 0; i < k; i++) {
//       let temp = nums[nums.length - 1]
//       moveBack(nums)
//       nums[0] = temp
//   }
// };
// function moveBack (nums: number[]) {
//   for (let i = nums.length - 1; i >= 0; i -= 1) {
//       nums[i] = nums[i - 1]
//   } 
// }
