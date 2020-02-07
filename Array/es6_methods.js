let arr = ["Python", "PHP", "JAVA", "Javascript", "SCALA"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//Iterate using for...of loop
for (key of arr) {
  if (key.length > 3) {
    console.log(`Length of ${key}: ${key.length}`);
  }
}
// ES6 Iterator
let iterator = arr[Symbol.iterator]();
console.log(`ES6 Iterator 1: ${iterator.next().value}`); //Python
console.log(`ES6 Iterator 2: ${iterator.next().value}`); //PHP

// Iterate Array with key - value pairs
//Entries
let aEntries = arr.entries();
console.log(aEntries.next().value);
for (let pairs of aEntries) {
  console.log(`pairs: ${pairs}`);
}

//Keys
let aKeys = arr.keys();
for (let keys of aKeys) {
  console.log(`keys: ${keys}`);
}

//Values
let aValues = arr.values();
for (let val of aValues) {
  console.log(`value: ${val}`);
}

// Iterate Array of Object with key - value pairs
var myArray = {Name: "Xaziz", Score: 200, Team: "Star Group"};
console.log(`Object Keys: ${Object.keys(myArray)}`);
console.log(`Object Values: ${Object.values(myArray)}`);
console.log(`Object Entries: ${Object.entries(myArray)}`);

// create new array from existing one
let evens = Array.from(numbers, x => x % 2 == 0);
console.log(`New Array: ${evens}`);

// fill array with a value
let fillArr = Array(6).fill(1);
console.log(`Fill Array: ${fillArr}`); //1,1,1,1,1,1

//Check item is in array - return boolean
let item = arr.includes("PHP7");
console.log(`Is PHP7 is in array?: ${item}`); //false

// Pass starting index from where array start searching
let itemIndex = arr.includes("JAVA", 2);
console.log(`Is JAVA is in array?: ${itemIndex}`); //false

//Find the first item which fulfills condition in array
console.log(`First element greater then 11?: ${numbers.find(item => item > 11)}`); //12

//Find the first item's index which satisfies condition in array
console.log(
  `First element's index greater then 11?: ${numbers.findIndex(item => item > 11)}`
); //12
