let evenOutput = "";

for (let a = 2; a <= 50; a += 2) {
    evenOutput += a + " ";
}

console.log(evenOutput);

    let factorialNumber = 5;
let factorialResult = 1;
let b = 1;

while (b <= factorialNumber) {
    factorialResult *= b;
    b++;
}

console.log("Factorial:", factorialResult);

let c = 20;

do {
    console.log(c);
    c--;
} while (c >= 1);

let text = "JavaScript";
let reversedText = "";

for (let d = text.length - 1; d >= 0; d--) {
    reversedText += text[d];
}

console.log(reversedText);

const highestNumbers = [45, 12, 89, 34, 67, 90, 23];

let highestNumber = highestNumbers[0];

for (let e = 1; e < highestNumbers.length; e++) {
    if (highestNumbers[e] > highestNumber) {
        highestNumber = highestNumbers[e];
    }
}

console.log("Highest:", highestNumber);

const oddNumberArray = [10, 15, 20, 25, 30, 35, 40];

let oddTotal = 0;

for (let f = 0; f < oddNumberArray.length; f++) {
    if (oddNumberArray[f] % 2 !== 0) {
        console.log(oddNumberArray[f]);
        oddTotal += oddNumberArray[f];
    }
}

console.log("Odd Total:", oddTotal);

const studentDetails = {
    name: "Ravi",
    age: 22,
    course: "JavaScript",
    mark: 85
};

console.log(studentDetails.name);
console.log(studentDetails.age);
console.log(studentDetails.course);
console.log(studentDetails.mark);

const studentList = [
    { name: "Arun", mark: 85 },
    { name: "Bala", mark: 65 },
    { name: "Charan", mark: 90 },
    { name: "Deepak", mark: 70 }
];

for (let g = 0; g < studentList.length; g++) {
    if (studentList[g].mark > 75) {
        console.log(studentList[g].name, studentList[g].mark);
    }
}

const calculateTotal = (...values) => {
    let totalSum = 0;

    for (let h = 0; h < values.length; h++) {
        totalSum += values[h];
    }

    return totalSum;
};

console.log(calculateTotal(10, 20, 30, 40));