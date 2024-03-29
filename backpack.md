# 背包问题

dp问题，其实从根本来说就是一种反证法的特殊运用，在dp中，往往我们第一步将会拟定我们的问题是可解并已经解决之前的过程，作为最后一步，我们就关系当下就行。同时在每一步中我们会将问题的规模缩减，最主要的是缩减上下限

这也是通过这个模式将从前往后的思维模式转换为了从最后一个问题出发的模式

# 01背包
有N件物品和一个容量为V的背包。选择拿取第i件物品需要消耗Wi的体积，但可以得到Ci的价值，求拿取哪些物品可以使得价格最大。

通过通用的模式，我们可以从问题中定义我们的方程

> F[i,V]

即，当我们从前i个物品中选择容量为V的背包能拿到最多的价格，转移方程也很简单，对于任意一步，我们的选择只有两个

- 选择这个物品，导致背包容量减少，并且增加了价值
> F[i-1,V-Ci] + Wi
- 不选这个物品，则缩小备选物品数组
> F[i-1,V]

取其中最大的

> F[i,V] = MAX{ F[i-1, V] , F[ i-1, V-Ci] + Wi}

```js
const MAX = (a,b) => a>b?a:b
const items = [{cost:...,weight:...}...]
function solution(i,V){
    if(i < 0)return 0
    const item = items[i]
    if(item.weight > V){
        return solution(i-1,V)
    }

    return MAX(solution(i-1,V),solution(i-1,V-item.weight)+item.cost)
}
```

> *优化在代码中

> 简单变种：对于这个问题会出现常见的两种解答案，一种是求问刚好装满背包的，有的则并不会表明是否需要装满，关键在于如何初始化第一行数据

应对这种情况是很简单的，需要正好装吗的话在我们的状态转移表中就需要一个额外的数值状态，一般的我们会给他记作-INF，当然这个值，对于大部分的问题只需要小于最大值就行，它的作用是用于表示ans状态

例如

| I/V | 0   | 1   | 2   | 3   |
| --- | --- | --- | --- | --- |
| 0   | 0   | 0   | 0   | 0   |
| 1   | 0   | ... | ... | ... |

这个表中，[0,0] 位为0，表示0个物品在0个空间的背包里面，可以拿到最大0的价值

[0,1] 为1，表示0个物品在1个空间的背包里，最大的价值为零

    [ 0, 0, 0, 4, 4, 4, 4, 4, 4 ]
    [ 0, 0, 0, 4, 4, 5, 5, 5, 9 ]
    [ 0, 2, 2, 4, 6, 6, 7, 7, 9 ]
    [ 0, 2, 2, 4, 6, 6, 7, 7, 9 ]
    [ 0, 2, 3, 5, 6, 7, 9, 9, 10 ]

若为如下

| I/V | 0   | 1    | 2    | 3    |
| --- | --- | ---- | ---- | ---- |
| 0   | 0   | -INF | -INF | -INF |
| 1   | 0   | ...  | ...  | ...  |

[0,1] 为-INF，表示0个物品在1个空间的背包里，无法装满

    [ 0, #, #, 4, #, #, #, #, # ]
    [ 0, #, #, 4, #, 5, #, #, 9 ]
    [ 0, 2, #, 4, 6, 5, 7, #, 9 ]
    [ 0, 2, 1, 4, 6, 5, 7, 6, 9 ]
    [ 0, 2, 3, 5, 6, 7, 9, 8, 10 ]
    // 为排版需求#表示-INF
    // 可以直观看出-INF这个值在表格中的传递过程


# 完全背包
题意大致相同，不同的是，每件物品不再只能使用一次，而是可以使用无数次

所以，我们回看01问题，我们的策略变得更复杂了，不再是拿或者不拿，而变成了拿一个拿两个甚至更多个

看上去很复杂，其实完全可以套用01背包的思路。我们可以将01背包看作允许拿物品一次或者零次，那么我们的转移方程

> F[i,V] = MAX{ F[i-1, V] , F[ i-1, V-Ci] + Wi}

也就可以普遍化得到完全背包的转移方程

> F[i,V] = MAX{ F[i-1, V-kWi] + kCi | 0 <= kWi <= V }

即，取拿零个到拿满背包的情况，中取最大的那个值

```js
function completeBackpack(i,V){
    if(i < 0 || V <= 0)return 0
    const item = items[i]
    if(item.weight > V){
        return solution(i-1,V)
    }
    const maxK = v / item.weight
    let ans = 0;
    for (let k = 0; k < maxK; k++) {
        const sub = completeBackpack(i-1,v-k*item.weight) + k*item.cost
        if(ans < sub){
            ans = sub
        }
    }
    return ans
}
```

虽然优化流程和01差不多，转换成表格，记忆化这些。但是也有自己独特的地方，对于无限拿取，显而易见的我们只要拿最物美价廉的就像，怎样表示物美价廉呢？用 value/weight 即每单位的价值，以此对比。那么我们就可以排除一些物品，若下一个物品没有当前的物品物美价廉，我们可以直接跳过
