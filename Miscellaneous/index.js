/* *** The in Operator: Checks if property exists in object ***  */
let user = {
    name:"Shah",
    age:27
}
console.log("name" in user); // true
console.log("address" in user); // false
console.log("toString" in user); // true => object inherits toString method

let scores = [20,30,40]; //  In array it will check for indices 
console.log("1" in scores); // true
console.log("4" in scores); // false

/* *** The instanceof Operator: Checks if object is instance of class  *** */
let d = new Date();
console.log(d instanceof Date); // true => d was created with Date()
console.log(d instanceof Object); // true => all objects are instance of Object
console.log(d instanceof Number); // false  

let languages = ["Java","Php","Python"];
console.log(languages instanceof Array); // true
console.log(languages instanceof Object); // true => all arrays are object
console.log(languages instanceof RegExp); //false
