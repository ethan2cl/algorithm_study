"use strict";
/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */
// @lc code=start
function twoSum(nums, target) {
    var hash = {};
    for (var i = 0; i < nums.length; i++) {
        var result = target - nums[i];
        if (hash[result] !== undefined) {
            return [i, hash[result]];
        }
        else {
            hash[nums[i]] = i;
        }
    }
    return [0, 1];
}
;
// @lc code=end

console.log(twoSum ([3,2,3], 6));
