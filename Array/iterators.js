let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//Iterate each element of array using forEach (do not generate new array)
console.log(`Using Foreach():`);
numbers.forEach(num => {
  console.log(`${num} : ${num * num}`);
});

// Iterate each element of array and return Boolean value based on operation
// every() returns true if every element matched the criteria
let isEven = numbers.every(num => num % 2 === 0);
console.log(`All numbers are even?: ${isEven}`);

// Iterate each element of array and return Boolean value based on operation
// some() returns true if at least one element matched the criteria
let someEven = numbers.some(num => num % 2 === 0);
console.log(`Some of numbers are even?: ${someEven}`);

// Iterate each element of array and return new array
let newarr = numbers.map(num => (num += 10));
console.log(`New array: ${newarr}`);

let arr = ["Also", "Known", "As"];
let firstletter = arr.map(element => element[0]);
console.log(`First letter of every element  array: ${firstletter.join("")}`);

// Filter array
let filtered = numbers.filter(num => num > 10);
console.log(`Filtered array: ${filtered}`);

//Reduce
let total = numbers.reduce((sum, item) => sum + item);
console.log(`Total: ${total}`);

let str = ["My ", "new ", "skill ", "is ", "Swimming "];
console.log(str.reduce((line, word) => line + word));
console.log(str.reduce((line, word) => word + line));
console.log(str.reduceRight((line, word) => line + word));
