"use strict";
/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 *
 * 如果 height[left]<height[right]，则必有 leftMax<rightMax
 * 则下表left能接到的雨水就等于 leftMax -height[left]
 *
 * 右边反之亦然
 *
 */
// @lc code=start
function trap(height) {
    // 双指针
    var leftIndex = 0, rightIndex = height.length - 1;
    // 保存左右两侧最高的柱子
    var leftMax = 0, rightMax = 0, result = 0;
    while (leftIndex < rightIndex) {
        // 左右两侧最高的柱子
        leftMax = Math.max(height[leftIndex], leftMax);
        rightMax = Math.max(height[rightIndex], rightMax);
        if (height[leftIndex] < height[rightIndex]) {
            result += leftMax - height[leftIndex];
            leftIndex++;
        }
        else {
            result += rightMax - height[rightIndex];
            rightIndex--;
        }
    }
    return result;
}
;
// @lc code=end
