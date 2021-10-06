let arr = ["Python", "PHP", "JAVA", "Javascript", "SCALA"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//Iterate using for...of loop
for (const val of arr) {
  if (val.length > 3) {
    console.log(`Length of ${val}: ${val.length}`);
  }
}
/* 
  Length of Python: 6
  Length of JAVA: 4
  Length of Javascript: 10
  Length of SCALA: 5
*/

// ES6 Iterator
let iterator = arr[Symbol.iterator]();
console.log(`ES6 Iterator 1: ${iterator.next().value}`); //Python
console.log(`ES6 Iterator 2: ${iterator.next().value}`); //PHP

// Iterate Array with key - value pairs
//Entries
let aEntries = arr.entries();
console.log(aEntries.next().value); //[0, 'Python']:- position 0, value Python
  for (let pairs of aEntries) {
    console.log(`pairs: ${pairs}`);
  } 
  /* 
    pairs: 1,PHP
    pairs: 2,JAVA
    pairs: 3,Javascript
    pairs: 4,SCALA
  */

//Keys
let aKeys = arr.keys();
for (let keys of aKeys) {
  console.log(`keys: ${keys}`);
}
  /* 
    keys: 0
    keys: 1
    keys: 2
    keys: 3
    keys: 4
  */

//Values
let aValues = arr.values();
for (let val of aValues) {
  console.log(`value: ${val}`);
}
  /* 
  value: Python
  value: PHP
  value: JAVA
  value: SCALA
  */


// Iterate Array of Object with key - value pairs
var myArray = {Name: "Xaziz", Score: 200, Team: "Star Group"};
console.log(`Object Keys: ${Object.keys(myArray)}`);
console.log(`Object Values: ${Object.values(myArray)}`);
console.log(`Object Entries: ${Object.entries(myArray)}`);

/*
  Object Keys: Name,Score,Team
  Object Values: Xaziz,200,Star Group
  Object Entries: Name,Xaziz,Score,200,Team,Star Group 
 */

// create new array from existing one
let evens = Array.from(numbers, x => x % 2 == 0);
console.log(`New Array: ${evens}`);

// fill array with a value
let fillArr = Array(6).fill(1);
console.log(`Fill Array: ${fillArr}`); // [1,1,1,1,1,1]

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
); //11
