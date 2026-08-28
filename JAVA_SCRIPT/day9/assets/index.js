function getSum(n) {

    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    return sum;
}

let result = getSum(5);

console.log(result);
