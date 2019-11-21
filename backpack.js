const MAX = (a, b) => a > b ? a : b

function F01(items, V) {
    const tail = items.length - 1
    if (tail === -1) return 0
    // 递归求解
    // return solution(tail, V)

    // function solution(i, V) {
    //     if (i <= 0) return 0
    //     const item = items[i]
    //     if (item.weight > V) {
    //         return solution(i - 1, V)
    //     }
    //     return MAX(solution(i - 1, V), solution(i - 1, V - item.weight) + item.cost)
    // }

    // 记忆化方法
    // const memo = []
    // return memoSolution(tail, V)

    // function memoSolution(i, V) {
    //     if (memo[i] && memo[i][V]) {
    //         return memo[i][V]
    //     } else if (!memo[i]) {
    //         memo[i] = []
    //     }
    //     // solution
    //     let result = null;
    //     if (i <= 0) {
    //         result = 0
    //     } else {
    //         const item = items[i]
    //         if (item.weight > V) {
    //             result = memoSolution(i - 1, V)
    //         } else {
    //             result = MAX(memoSolution(i - 1, V), memoSolution(i - 1, V - item.weight) + item.cost)
    //         }
    //     }
    //     memo[i][V] = result
    //     return result
    // }

    // 优化空间的方法
    const onelinememo = [0]
    const item1 = items[0]
    for (let v = 1; v <= V; v++) {
        // onelinememo[v] = v >= item1.weight ? item1.cost : -Infinity;
        onelinememo[v] = v >= item1.weight ? item1.cost : 0;
    }
    for (let i = 1; i <= tail; i++) {
        const item = items[i]
        console.log(onelinememo)
        for (let v = V; v > 0; v--) {
            if (v - item.weight < 0) continue
            onelinememo[v] = MAX(onelinememo[v], onelinememo[v - item.weight] + item.cost)
        }
    }
    console.log(onelinememo)
    return onelinememo[V]
}

console.log("====01背包问题====")
console.log(F01([{
    cost: 4,
    weight: 3
}, {
    cost: 5,
    weight: 5,
}, {
    cost: 2,
    weight: 1
}, {
    cost: 1,
    weight: 2
}, {
    cost: 3,
    weight: 2
}], 8))
console.log("====01背包问题====")