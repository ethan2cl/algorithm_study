/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */
// @lc code=start
function plusOne(digits) {
    for (var i = digits.length - 1; i >= 0; i -= 1) {
        digits[i]++;
        digits[i] %= 10;
        if (digits[i] !== 0)
            return digits;
    }
    moveBack(digits);
    digits[0] = 1;
    return digits;
}
;
function moveBack(nums) {
    for (var i = nums.length - 1; i >= 0; i -= 1) {
        nums[i + 1] = nums[i];
    }
}
// @lc code=end
