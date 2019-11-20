const lsNode = (key = null, val = null, prev = null, next = null) => ({
    key,
    val,
    prev,
    next
})

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cap = capacity
    this.hash = new Map()
    this.head = lsNode()
    this.tail = lsNode()
    this.head.next = this.tail
    this.tail.prev = this.head
};

const defaultResult = {
    val: -1
}
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.hash.has(key)) {
        this.mv2tail(key)
    }
    const res = this.hash.get(key) || defaultResult
    return res.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.hash.has(key)) {
        this.hash.get(key).val = value
        this.mv2tail(key)
    } else {
        this.resize()
        const newNode = lsNode(key, value)
        this.hash.set(key, newNode)
        newNode.prev = this.tail.prev
        newNode.next = this.tail
        this.tail.prev.next = newNode
        this.tail.prev = newNode
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

LRUCache.prototype.mv2tail = function (key) {
    node = this.hash.get(key);
    node.prev.next = node.next;
    node.next.prev = node.prev;

    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
}

LRUCache.prototype.resize = function () {
    if (this.hash.size == this.cap) {
        this.hash.delete(this.head.next.key)
        this.head.next = this.head.next.next
        this.head.next.prev = this.head
    }
}

// const cache = new LRUCache(2)

// console.log(cache.put(1, 1));
// console.log(cache.put(2, 2));
// console.log(cache.get(1)); // 返回  1
// console.log(cache.put(3, 3)); // 该操作会使得密钥 2 作废
// console.log(cache.get(2)); // 返回 -1 (未找到)
// console.log(cache.put(4, 4)); // 该操作会使得密钥 1 作废
// console.log(cache.get(1)); // 返回 -1 (未找到)
// console.log(cache.get(3)); // 返回  3
// console.log(cache.get(4)); // 返回  4