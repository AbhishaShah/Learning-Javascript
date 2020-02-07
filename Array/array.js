let nums = [];

// Add elements into array
nums.push(10);
nums.push(20);
let newlen = nums.push(30);
console.log(`After adding: ${nums}`); //[ 10, 20, 30 ]
console.log(`push() return new length of array: ${newlen}`); // 3

// Remove element to the end of array
let removed = nums.pop();
console.log(`After removing: ${nums}`); //[ 10, 20]
console.log(`pop() return removed element: ${removed}`); // 30

// Add element to the start of array
newlen = nums.unshift(40, 30);
console.log(`After adding at top: ${nums}`); // [ 40, 30, 10, 20 ]
console.log(`unshift() return new length of array: ${newlen}`); // 4

// Remove element from the top of array
removed = nums.shift();
console.log(`After removing from the top: ${nums}`); //[ 30, 10, 20]
console.log(`shift() return removed element: ${removed}`); // 40

//Prints array length
console.log(`Array length: ${nums.length}`); // 3

// Check object is an array
let str = "Java";
let arr = ["A", "B", "C", 2, 4];
console.log(`str is array? ${Array.isArray(str)}`); // false
console.log(`arr is array? ${Array.isArray(arr)}`); // true
