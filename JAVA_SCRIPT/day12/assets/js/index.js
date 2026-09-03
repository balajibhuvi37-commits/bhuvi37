let numbers = [10, 20, 30, 40, 50];

numbers.push(60, 70, 80);

console.log(numbers);

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Papaya"];

let removedFruit1 = fruits.pop();
let removedFruit2 = fruits.pop();

console.log("Removed:", removedFruit1);
console.log("Removed:", removedFruit2);

console.log("Final Array:", fruits);

let cities = ["Chennai", "Madurai", "Coimbatore", "Trichy", "Salem"];

let removedCity = cities.shift();

console.log("Removed City:", removedCity);

cities.unshift("Tirunelveli");

console.log("Final Array:", cities);

let students = ["Arun", "Bala", "Kumar", "Ravi", "Siva"];

students.forEach(function(student, index) {
    console.log(`${index + 1}. ${student}`);
});