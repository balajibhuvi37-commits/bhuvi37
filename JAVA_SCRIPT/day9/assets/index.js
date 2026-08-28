function addnumber(num1,num2) {
    return num1 + num2;
}
console.log(addnumber(10,20));




function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

printNumbers(10);



const factorial = (n) => {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
};

console.log(factorial(5));

