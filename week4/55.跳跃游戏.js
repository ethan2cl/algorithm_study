"use strict";
/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 *
 */
// @lc code=start
function canJump(nums) {
    var max = 0;
    for (var i = 0; i < nums.length; i++) {
        if (i > max)
            return false;
        max = Math.max(max, i + nums[i]);
        if (max > nums.length - 1)
            return true;
    }
    return false;
}
;
// @lc code=end
