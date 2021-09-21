"use strict";
/*
 * @lc app=leetcode.cn id=621 lang=typescript
 *
 * [621] 任务调度器
 */
// @lc code=start
function leastInterval(tasks, n, h = Array(26).fill(0)) {
    const freq = countBy(tasks);
    // 最多的执行次数
    const maxExec = Math.max(...Object.values(freq));
    // 具有最多执行次数的任务数量
    let maxCount = 0;
    Object.values(freq).forEach(v => {
        if (v === maxExec) {
            maxCount++;
        }
    });
    return Math.max((maxExec - 1) * (n + 1) + maxCount, tasks.length);
}
;
/**
 * 还原loadsh里面的该函数
 */
function countBy(tasks) {
    let obj = {};
    for (let i = 0; i < tasks.length; i++) {
        obj[tasks[i]] = obj[tasks[i]] === undefined ? 1 : (obj[tasks[i]] + 1);
    }
    console.log(obj);
    return obj;
}
// @lc code=end
