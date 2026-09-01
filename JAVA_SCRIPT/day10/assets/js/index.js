function runProgram1() {


let number = 8;
let result;

if (number > 0) {
    result = "Positive number";
} else if (number < 0) {
    result = "Negative number";
} else {
    result = "Zero";
}

document.getElementById("output1").innerHTML =
    "Output: " + result;


}

function runProgram2() {


let a1 = 56;
let a2 = 90;
let a3 = 89;
let result;

if (a1 >= a2 && a1 >= a3) {
    result = a1 + " is the largest number";
} else if (a2 >= a1 && a2 >= a3) {
    result = a2 + " is the largest number";
} else {
    result = a3 + " is the largest number";
}

document.getElementById("output2").innerHTML =
    "Output: " + result;


}

function runProgram3() {


let numbers = [10, 15, 20, 25, 30, 35];
let result = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {
        result.push(numbers[i]);
    }

}

document.getElementById("output3").innerHTML =
    "Output: " + result.join(", ");


}

function runProgram4() {


let value = 12345;
let sum = 0;

let numberString = String(value);

for (let i = 0; i < numberString.length; i++) {

    sum = sum + Number(numberString[i]);

}

document.getElementById("output4").innerHTML =
    "Output: " + sum;


}

function runProgram5() {


let num = [10, 20, 10, 30, 20, 40];
let sum1 = 0;

for (let i = 0; i < num.length; i++) {

    sum1 += num[i];

}

document.getElementById("output5").innerHTML =
    "Output: " + sum1;


}

function runProgram6() {


let prime = 50;
let counter = 0;

for (let i = 1; i <= prime; i++) {

    if (prime % i === 0) {
        counter++;
    }

}

let result;

if (counter === 2) {
    result = "Prime Number";
} else {
    result = "Not a Prime Number";
}

document.getElementById("output6").innerHTML =
    "Output: " + result;


}

function runProgram7() {


let a = [10, 20, 60, 40];
let b = [20, 40, 50, 60];

let result = [];

for (let i = 0; i < a.length; i++) {

    for (let j = 0; j < b.length; j++) {

        if (a[i] === b[j]) {
            result.push(a[i]);
        }

    }

}

document.getElementById("output7").innerHTML =
    "Common Elements: " + result.join(", ");


}

function runProgram8() {


let arr = [10, 20, 10, 30, 10, 40];
let target = 10;
let countnum = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] === target) {
        countnum++;
    }

}

document.getElementById("output8").innerHTML =
    "Output: " + countnum + " times";


}

function runProgram9() {


let text = "javascript";
let count = 0;

for (let i = 0; i < text.length; i++) {

    if (
        text[i] === "a" ||
        text[i] === "e" ||
        text[i] === "i" ||
        text[i] === "o" ||
        text[i] === "u"
    ) {

        count++;

    }

}

document.getElementById("output9").innerHTML =
    "Number of Vowels: " + count;


}


// ==================== TASK 1 ====================
// var, let, const

var varValue = 10;
var varValue = 20;
varValue = 30;

let letValue = 10;
letValue = 30;

const constValue = 100;

console.log("Task 1");
console.log(varValue);
console.log(letValue);
console.log(constValue);


// ==================== TASK 2 ====================
// Arrow Functions

const addNumbers = (a, b) => {
    return a + b;
};

const squareNumber = n => n * n;

console.log("Task 2");
console.log(addNumbers(10, 20));
console.log(squareNumber(5));


// ==================== TASK 3 ====================
// Destructuring

const task3Numbers = [10, 20, 30];

const [firstNumber, secondNumber, thirdNumber] = task3Numbers;

const task3Student = {
    name: "Ravi",
    age: 25,
    course: "JavaScript"
};

const {
    name: studentName,
    age: studentAge,
    course: studentCourse
} = task3Student;

console.log("Task 3");
console.log(firstNumber, secondNumber, thirdNumber);
console.log(studentName, studentAge, studentCourse);


// ==================== TASK 4 ====================
// Rest and Spread

function calculateSum(...restNumbers) {
    let total = 0;

    for (let number of restNumbers) {
        total += number;
    }

    return total;
}

const originalArray = [10, 20, 30];

const spreadArray = [...originalArray, 40, 50];

console.log("Task 4");
console.log(calculateSum(10, 20, 30, 40));
console.log(spreadArray);


// ==================== TASK 5 ====================
// Default Parameter + Template Literal

function getStudentDetails(personName, personCourse, personCity = "Chennai") {
    return `Name: ${personName}, Course: ${personCourse}, City: ${personCity}`;
}

console.log("Task 5");
console.log(getStudentDetails("Ravi", "JavaScript"));


// ==================== TASK 6 ====================
// Class and Objects

class StudentDetails {

    constructor(studentName, studentAge, studentMark) {
        this.name = studentName;
        this.age = studentAge;
        this.mark = studentMark;
    }

    displayDetails() {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Mark: ${this.mark}`
        );
    }
}

const studentOne = new StudentDetails("Ravi", 20, 85);

const studentTwo = new StudentDetails("Kumar", 21, 90);

console.log("Task 6");

studentOne.displayDetails();
studentTwo.displayDetails();


// ==================== TASK 8 ====================
// Optional Chaining and Nullish Coalescing

const task8User = {
    name: "Ravi"
};

const userCity = task8User.address?.city ?? "City Not Available";

console.log("Task 8");
console.log(userCity);


// ==================== TASK 9 ====================
// Array Methods

const task9Numbers = [10, 25, 30, 45, 50, 65];

const numbersAbove30 = task9Numbers.filter(number => number > 30);

const firstNumberAbove40 = task9Numbers.find(number => number > 40);

const hasNumber50 = task9Numbers.includes(50);

const doubledValues = task9Numbers.map(number => number * 2);

console.log("Task 9");

console.log(numbersAbove30);
console.log(firstNumberAbove40);
console.log(hasNumber50);
console.log(doubledValues);


// ==================== TASK 10 ====================
// ES6+ Syntax

const task10Name = "Ravi";

const task10Age = 25;

const task10Student = {
    task10Name,
    task10Age
};

const modernGreet = person => `Hello ${person}`;

console.log("Task 10");

console.log(task10Student);

console.log(modernGreet(task10Name));

// ==================== logical Operator question ====================

console.log("1) Positive, Negative, or Zero");

let number = 8;
if (number < 0) {
  console.log("Negative number ");
} else {
  console.log(" Positive number ");
}



console.log("2)Find the Largest of Three Numbers");

let a1 = 56;
let a2 = 90;
let a3 = 89;
if (a1 > a2) {
  console.log(" the a1 value larger ");
}
if (a2 > a3) {
  console.log("The a2 value thhe larger number ");
} else {
  console.log(" The a3 value islarger number ");
}



console.log("3)Count Even Numbers");

let numbers = [10, 15, 20, 25, 30, 35];

for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
}



console.log("4)Find the Sum of Digits");

let value = 98765;
let sum = 0;

let numberString = String(value);

for (let i = 0; i < numberString.length; i++) {
  sum = sum + Number(numberString[i]);
}

console.log(sum);

console.log("5) Find the sum of number in array");

let num = [10, 20, 10, 30, 20, 40];
let sum1 = 0;
for (let i = 0; i < num.length; i++) {
  sum1 += num[i];
}
console.log(sum1);

console.log("6)Find whether a number is prime");
let prime = 25;
let counter = 0;
for (let i = 1; i <= prime; i++) {
  if (prime % i == 0) {
    counter++;
  }
  console.log(prime);
}
if (counter == 2) {
  console.log("prime");
} else {
  console.log(" Not a prime");
}

console.log("7)Find common elements in two arrays");

let a = [10, 20, 60, 40];
let b = [20, 40, 50, 60];
for (let i = 0; i <= a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (a[i] == b[j]) {
      console.log(a[i]);
    }
  }
}


console.log("8)Find how many times a particular value occurs");
let arr = [10, 20, 10, 30, 10, 40];
let target = 10;
countnum=0

for (let i=1; i<arr.length;i++){
    if (arr[i]==target){
        countnum++;
    }
    
}
 console.log(countnum);

 
console.log("Count vowels");

 let text = "javascript";
 let count = 0;

 for (let i = 0; i < text.length; i++) {
   if (text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u") {
     count++;
   }
 }

 console.log(count);

 
