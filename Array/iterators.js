let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for...of loop to know index of array 
let sum_of_even = 0;
for(let [index,element] of numbers.entries()) {
  if(index % 2 == 0) sum_of_even += element;
}
console.log(sum_of_even); // 64

// Iterate each element of array using forEach (do not generate new array)
console.log(`Using Foreach():`);
numbers.forEach(num => {
  console.log(`${num} : ${num * num}`);
});

// increment each array element, original array modified
numbers.forEach(function (value,index,numbers) { numbers[index] = value + 1; } );
console.log(`Numbers array modified: ${numbers}`); //  [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
 
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
console.log(`First letter of every element  array: ${firstletter.join("")}`); // AKA

// Filter array
let filtered = numbers.filter(num => num > 10);
console.log(`Filtered array: ${filtered}`); // Filtered array: 11,12,13,14,15

//Reduce
let total = numbers.reduce((sum, item) => sum + item);
console.log(`Total: ${total}`);

let str = ["My ", "new ", "skill ", "is ", "Swimming "];
console.log(str.reduce((line, word) => line + word));
console.log(str.reduce((line, word) => word + line));
console.log(str.reduceRight((line, word) => line + word));
