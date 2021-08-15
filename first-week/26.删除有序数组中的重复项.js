/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */
// @lc code=start
function removeDuplicates(nums) {
    if (!nums.length)
        return 0;
    // 有序数组 相同的元素必然相邻
    // 指向非重复元素前移的最终索引
    var i = 0;
    for (var j = 0; j < nums.length; j += 1) {
        if (nums[i] !== nums[j]) {
            i++;
            // 非重复元素向前移
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
;
// @lc code=end
