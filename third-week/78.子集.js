"use strict";
/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 *
 * helper[0]: result: [[]], path: []
 * loop:
 *  0: path: [1], helper[1]: result: [[], [1]]
 *  loop: path: [1,2], helper[2]: result: [[], [1], [1,2]]
 *  loop: path: [1,2,3], helper: result: [[], [1], [1,2], [1,2,3]]
 * 开始回溯，回到helper[2], 执行path.pop(), path: [1,2]
 * 继续回溯,helper[1]， path: [1]，此时 i = startIndex = 1，继续loop
 * helper[1]中i = 2, path: [1, 3] helper[3] result.push([1,3])
 * 然后回溯到helper[0]中， 走i = 1 & i = 2
 * 最终完成
 */
// @lc code=start
function subsets(nums) {
    var result = [], path = [];
    var helper = function (startIndex) {
        result.push(path.slice());
        for (var i = startIndex; i < nums.length; i++) {
            path.push(nums[i]);
            helper(i + 1);
            path.pop();
        }
    };
    helper(0);
    return result;
}
;
// @lc code=end
