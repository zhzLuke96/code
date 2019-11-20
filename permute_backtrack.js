function permute(nums) {
    const N = nums.length;
    const res = [];
    backtrack(0);
    return res;

    function backtrack(first) {
        if (first === N) {
            res.push(nums.slice());
        }
        for (let i = first; i < N; i++) {
            [nums[first], nums[i]] = [nums[i], nums[first]];
            backtrack(first + 1);
            [nums[first], nums[i]] = [nums[i], nums[first]];
        }
    }
}