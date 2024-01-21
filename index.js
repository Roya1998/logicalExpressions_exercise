//Task:Direct JavaScript Data Types, Operators and Logical Expressions Practice;

// Part 1

const numbers = [10, 20, 30, 40, 50];

const [firstNumber, secondNumber] = numbers;

console.log(firstNumber, secondNumber);
console.log(numbers.length);

// Part 2

const myString = "string";
const myNumber = 6;
const myBoolean = true;

console.log(typeof myString, typeof myNumber, typeof myBoolean);

// Part 3

console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);

console.log(firstNumber == secondNumber);
console.log(firstNumber === secondNumber);
console.log(firstNumber != secondNumber);
console.log(firstNumber !== secondNumber);
console.log(firstNumber < secondNumber);
console.log(firstNumber > secondNumber);
console.log(firstNumber <= secondNumber);
console.log(firstNumber >= secondNumber);

// Part 4

console.log(firstNumber % 2 === 0 && firstNumber > 0);
console.log(firstNumber % 2 === 0 || firstNumber > 0);
console.log(firstNumber > 0);
