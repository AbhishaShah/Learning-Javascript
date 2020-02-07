let arr = ["Python", "PHP", "JAVA", "Javascript", "SCALA"];

// Searching position of specific value, Otherwise -1
let JSpos = arr.indexOf("Javascript");
console.log(`Javascript is at position: ${JSpos}`); //3
let Nodepos = arr.indexOf("Node");
console.log(`Nodepos is at position: ${Nodepos}`); // -1

// String Representations of Array
let str = arr.join();
console.log(`String Representation: ${str}`); //Python,PHP,JAVA,Javascript,SCALA

// Creating New Arrays from joining Arrays
let arr2 = ["HTML", "CSS"];
let newarr = arr.concat(arr2);
console.log(newarr); // [ 'Python', 'PHP', 'JAVA', 'Javascript', 'SCALA', 'HTML', 'CSS' ]

// Add elements to the specific position
arr.splice(4, 0, "Node", "React");
console.log(arr); //[ 'Python', 'PHP', 'JAVA', 'Node', 'React', 'Javascript', 'SCALA' ]

//Remove elements from specific position
newarr = arr.splice(4, 2);
console.log(`Removed elemets: ${newarr}`); //Node,React
console.log(`Updated array: ${arr} `); // Python,PHP,JAVA,Javascript,SCALA

//Reverse the array
console.log(`Reversed Array: ${arr.reverse()}`); // SCALA,Javascript,JAVA,PHP,Python

//Sort the array

// For string elements array
console.log(`Sorted Array: ${arr.sort()}`); //JAVA,Javascript,PHP,Python,SCALA

// to sort numeric array
let nums = [11, 20, 3, 13, 8];
nums.sort((no1, no2) => no1 - no2);
console.log(`Sorted numeric array: ${nums}`); // 3,8,11,13,20

// Creating New Arrays from existing Array (start, end)

newarr = arr.slice(1, 3);
console.log(`Original array: ${arr}`); // JAVA,Javascript,PHP,Python,SCALA
console.log(`Sliced array: ${newarr}`); // Javascript,PHP
