let str = "Hello, world";
console.log(str);

/* ****** Obtaining portion of a string ****** */

/* substring(start [, end]):
 *  Returns the part of the string from start to (but not including) end. 
*/
console.log(str.substring(1,4)); // ell
console.log(str.substring(-5)); // Hello, world => Not allow negative as start

/* slice(start [, end]): 
 *  Returns the part of the string from start to (but not including) end. 
*/
console.log(str.slice(1,4)); // ell
console.log(str.slice(-5));// world

/* substr(start [, length]): 
 *  Returns the part of the string from start, with the given length.
*/
console.log(str.substr(1,4)); // ello

/* split(delimeter): 
 *  split string at delimeter into array
*/
console.log(str.split(",")); // ["Hello", " world"]



/* ****** Searching for a substring  ****** */

/* indexOf(substr,pos): 
 *  Looks for the substr in given string,
 *  starting from the given position pos, and returns the position where the match was found OR  
 *  -1 if nothing can be found.
*/
console.log(str.indexOf("w")); // 7 => position of first letter 'w'
console.log(str.indexOf("a")); // -1

let mystring= "How are you?"
if(mystring.indexOf("?") !== 1) {
    console.log("'?' is found");
}

/* lastIndexOf(substr,pos): 
 *  Searches from the end of a string to its beginning.
*/
console.log(str.lastIndexOf("l")) // 10