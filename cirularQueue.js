const node = (data, nxt) => ({
    data,
    nxt
})
const circularList = k => {
    let tail = null;
    let t = null;
    while (k--) {
        t = node(null, t);
        if (!tail) tail = t
    }
    tail.nxt = t;
    return t;
}

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.head = this.tail = circularList(k)
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) return false
    if (this.tail.data === null) {
        this.tail.data = value
        return true
    }
    this.tail = this.tail.nxt
    this.tail.data = value
    return true
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) return false
    if (this.head === this.tail) {
        this.head.data = null
        return true
    }
    // let value = this.head.data
    this.head.data = null
    this.head = this.head.nxt
    // return value
    return true
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    return this.head.data === null ? -1 : this.head.data;
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    return this.tail.data === null ? -1 : this.tail.data;
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.head === this.tail && this.head.data === null
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.tail.nxt === this.head
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
const circularQueue = new MyCircularQueue(3); // set the size to be 3
console.log(circularQueue.enQueue(1)); // return true
console.log(circularQueue.enQueue(2)); // return true
console.log(circularQueue.enQueue(3)); // return true
console.log(circularQueue.enQueue(4)); // return false, the queue is full
console.log(circularQueue.Rear()); // return 3
console.log(circularQueue.isFull()); // return true
console.log(circularQueue.deQueue()); // return true
console.log(circularQueue.enQueue(4)); // return true
console.log(circularQueue.Rear()); // return 4