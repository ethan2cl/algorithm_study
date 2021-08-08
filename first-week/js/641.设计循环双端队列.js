"use strict";
/*
 * @lc app=leetcode.cn id=641 lang=typescript
 *
 * [641] 设计循环双端队列
 */
// @lc code=start
var MyCircularDeque = /** @class */ (function () {
    function MyCircularDeque(k) {
        /** 循环双端队列 */
        this.deque = [];
        /** 队尾 */
        this.rear = -1;
        /** 数组容量 */
        this.size = 0;
        this.size = k;
    }
    MyCircularDeque.prototype.insertFront = function (value) {
        if (this.isFull())
            return false;
        this.moveBack();
        this.deque[0] = value;
        this.rear++;
        return true;
    };
    MyCircularDeque.prototype.insertLast = function (value) {
        if (this.isFull())
            return false;
        this.rear++;
        this.deque[this.rear] = value;
        return true;
    };
    MyCircularDeque.prototype.deleteFront = function () {
        if (this.isEmpty())
            return false;
        this.movePrev();
        this.deque[this.rear] = 0;
        this.rear--;
        return true;
    };
    MyCircularDeque.prototype.deleteLast = function () {
        if (this.isEmpty())
            return false;
        this.deque[this.rear] = 0;
        this.rear--;
        return true;
    };
    MyCircularDeque.prototype.getFront = function () {
        if (this.isEmpty())
            return -1;
        return this.deque[0];
    };
    MyCircularDeque.prototype.getRear = function () {
        if (this.isEmpty())
            return -1;
        return this.deque[this.rear];
    };
    MyCircularDeque.prototype.isEmpty = function () {
        return this.rear === -1;
    };
    MyCircularDeque.prototype.isFull = function () {
        return this.rear + 1 === this.size;
    };
    /** 队列后移  */
    MyCircularDeque.prototype.moveBack = function () {
        for (var i = this.rear; i >= 0; i -= 1) {
            this.deque[i + 1] = this.deque[i];
        }
    };
    /** 队列前移 */
    MyCircularDeque.prototype.movePrev = function () {
        for (var i = 1; i <= this.rear; i += 1) {
            this.deque[i - 1] = this.deque[i];
        }
    };
    return MyCircularDeque;
}());
/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end
