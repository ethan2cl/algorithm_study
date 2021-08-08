"use strict";
/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */
// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    // 非零元素前移
    var lastZeroIndex = 0;
    for (var i = 0; i < nums.length; i += 1) {
        if (nums[i] !== 0) {
            nums[lastZeroIndex] = nums[i];
            lastZeroIndex++;
        }
    }
    for (var i = lastZeroIndex; i < nums.length; i += 1) {
        nums[i] = 0;
    }
}
;
// @lc code=end
