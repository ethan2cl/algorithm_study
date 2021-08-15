/*
 * @lc app=leetcode.cn id=641 lang=typescript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
class MyCircularDeque {
    /** 循环双端队列 */
    deque: number[] = []
    /** 队尾 */
    private rear = -1
    /** 数组容量 */
    private size: number = 0
    constructor(k: number) {
        this.size = k
    }

    insertFront(value: number): boolean {
        if (this.isFull()) return false
        this.moveBack()
        this.deque[0] = value
        this.rear++
        return true

    }

    insertLast(value: number): boolean {
        if (this.isFull()) return false
        this.rear++
        this.deque[this.rear] = value
        return true
    }

    deleteFront(): boolean {
        if (this.isEmpty()) return false
        this.movePrev()
        this.deque[this.rear] = 0
        this.rear--
        return true
    }

    deleteLast(): boolean {
        if (this.isEmpty()) return false
        this.deque[this.rear] = 0
        this.rear--
        return true
    }

    getFront(): number {
        if (this.isEmpty()) return -1
        return this.deque[0]
    }

    getRear(): number {
        if (this.isEmpty()) return -1
        return this.deque[this.rear]
    }

    isEmpty(): boolean {
        return this.rear === -1
    }

    isFull(): boolean {
        return this.rear + 1 === this.size
    }

    /** 队列后移  */
    private moveBack (): void {
        for (let i = this.rear; i >= 0; i -= 1) {
            this.deque[i + 1] = this.deque[i]
        }
    }

    /** 队列前移 */
    private movePrev () {
        for (let i = 1; i <= this.rear; i += 1) {
            this.deque[i - 1] = this.deque[i]
        }
    }
}

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

