function ZeroOneKnapsack(value, weight, n, W) {
    if (W < 0) {
        return Number.MIN_VALUE
    };
    if (n < 0 || W === 0) {
        return 0
    };

    let include = value[n] + ZeroOneKnapsack(value, weight, n - 1, W - weight[n]);
    let exclude = ZeroOneKnapsack(value, weight, n - 1, W);

    return Math.max(include, exclude);
}

const val = [20,5,10,40,15,25];
const weigh = [1,2,3,8,7,4];
const limitWeight = 10;
const nLength = val.length - 1;

console.log(ZeroOneKnapsack(val, weigh, nLength, limitWeight));