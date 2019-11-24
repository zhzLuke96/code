function perm(arr) {
    if (arr.length === 1) {
        return [arr];
    }
    let res = []

    for (let i = 0; i < arr.length; i++) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        let subRes = perm(arr.slice(1)).map(v => [arr[0]].concat(v));
        res = res.concat(subRes);
        [arr[0], arr[i]] = [arr[i], arr[0]];
    }

    return res
}

console.time("递归")
const r1 = perm([1, 2, 3, 4])
console.timeEnd("递归")
console.log(r1[2], r1.length)

function permFast(arr) {
    const end = arr.length
    let res = []
    innerPerm(0, arr.length)
    return res

    function innerPerm(start) {
        if (start === end - 1) {
            return res.push(arr.slice());
        }

        for (let i = start; i < end; i++) {
            [arr[start], arr[i]] = [arr[i], arr[start]];
            innerPerm(start + 1);
            [arr[start], arr[i]] = [arr[i], arr[start]];
        }

    }
}

console.time("fast")
const r2 = permFast([1, 2, 3, 4])
console.timeEnd("fast")
console.log(r2[2], r2.length)

function* permGen(arr) {
    const end = arr.length
    yield* innerPerm(0, arr.length);
    return -1;

    function* innerPerm(start) {
        if (start === end - 1) {
            yield arr.slice();
            return;
        }

        for (let i = start; i < end; i++) {
            [arr[start], arr[i]] = [arr[i], arr[start]];
            yield* innerPerm(start + 1);
            [arr[start], arr[i]] = [arr[i], arr[start]];
        }

    }
}

console.time("gen")
const r4 = permGen([1, 2, 3, 4])
console.timeEnd("gen")
r4.next()
r4.next()
const r43 = r4.next()
console.log(r43)


function T46(nums) {
    var left = [];
    if (nums.length == 0) return [
        []
    ];
    if (nums.length == 1) return [
        [nums[0]]
    ];
    left.push([nums[0], nums[1]]);
    left.push([nums[1], nums[0]]);
    for (var size = 3; size <= nums.length; size++) {
        var right = [];
        for (var i = 0; i < left.length; i++) {
            var list_i = left[i];
            for (var j = 0; j < size; j++) {
                var list_j = list_i.slice(0);
                list_j.splice(j, 0, nums[size - 1]);
                right.push(list_j);
            }
        }
        left = right;
    }
    return left;
}

console.time("插入")
const r5 = T46([1, 2, 3, 4])
console.timeEnd("插入")
console.log(r5[2], r5.length)