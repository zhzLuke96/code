const hashLength = 20011;
/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
    this.map = []
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    const index = key % hashLength
    if (this.map[index]) {
        this.map[index][key] = value
    } else {
        this.map[index] = {
            [key]: value
        }
    }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    const index = key % hashLength
    if (this.map[index] && this.map[index][key] !== undefined) {
        return this.map[index][key]
    } else {
        return -1
    }
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    const index = key % hashLength
    if (this.map[index] && this.map[index][key] !== undefined) {
        delete this.map[index][key]
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */