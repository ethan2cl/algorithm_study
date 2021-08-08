"use strict";
/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */
// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    var p1 = m - 1, p2 = n - 1;
    var tail = m + n - 1;
    var cur;
    while (p1 >= 0 || p2 >= 0) {
        if (p1 === -1) {
            cur = nums2[p2--];
        }
        else if (p2 === -1) {
            cur = nums1[p1--];
        }
        else if (nums1[p1] > nums2[p2]) {
            cur = nums1[p1--];
        }
        else {
            cur = nums2[p2--];
        }
        nums1[tail--] = cur;
    }
}
;
// @lc code=end
/**
 * 超出时间限制了
 */
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   let sort: number[] = []
//   // 双指针进行比较
//   let i = 0, j = 0
//   while(i < m || j < n) {
//     if (nums1[i] <= nums2[j]) {
//       nums1[i] !== 0 && sort.push(nums1[i++])
//     } else {
//       nums2[j] !== 0 && sort.push(nums2[j++])
//     }
//   }
//   for (let i = 0; i < nums1.length; i += 1) {
//     nums1[i] = sort[i]
//   }
// };
