

function processNumber(number, callback) {
    const processedResult = number * 2;
    callback(processedResult);
}

function displayNumber(result) {
    console.log("Task 1:", result);
}

processNumber(10, displayNumber);




function createCounter() {
    let counterValue = 0;

    return function () {
        counterValue++;
        console.log("Task 2:", counterValue);
    };
}

const myCounter = createCounter();

myCounter();
myCounter();
myCounter();




const task3Numbers = [10, 20, 30, 40, 50];

task3Numbers.push(60);
task3Numbers.push(70);

task3Numbers.pop();

console.log("Task 3:", task3Numbers);




const task4Fruits = ["Apple", "Mango", "Orange"];

task4Fruits.unshift("Banana");

task4Fruits.shift();

console.log("Task 4:", task4Fruits);


const task5Numbers = [10, 20, 30];

const copiedNumbers = [];

for (let i = 0; i < task5Numbers.length; i++) {
    copiedNumbers[copiedNumbers.length] = task5Numbers[i];
}

copiedNumbers[copiedNumbers.length] = 40;

console.log("Task 5:", copiedNumbers);



const task6Fruits = ["Apple", "Mango", "Orange"];
const task6Vegetables = ["Carrot", "Potato"];

// Add Banana
task6Fruits.push("Banana");

// Remove last element
task6Fruits.pop();

// Add Grapes at beginning
task6Fruits.unshift("Grapes");

// Remove first element
task6Fruits.shift();

// Check length
console.log("Task 6 Length:", task6Fruits.length);

// Combine arrays
const combinedArray = task6Fruits.concat(task6Vegetables);

// Display final result
console.log("Task 6 Final:", combinedArray);