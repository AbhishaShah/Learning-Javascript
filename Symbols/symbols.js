
/* A “symbol” represents a unique identifier and created using Symbol() with an optional description(name) */   
let id = Symbol(); // id is a new symbol
let id = Symbol("id"); /// id is a symbol with the description "id"

/* Symbol() function never returns the same value twice, even when called with the same argument */
let id1 = Symbol("id");
let id2 = Symbol("id");
 
alert(id1 == id2); // false

/* Symbol don’t auto convert to strings. */
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string
alert(id.toString()); // Symbol(id), now it works

/* Hidden properties: Symbols allow us to create “hidden” properties of an object, that no other part of code can accidentally access or overwrite.
 * Symbolic properties do not participate in for..in loop.
*/

let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 347
};
 
for (let key in user) alert(key); // name, age (no symbols)
 
console.log( "Direct: " + user[id] ); // the direct access by the symbol works

/* The Symbol.for() function takes a string argument and returns a Symbol value that is associated with the string you pass. 
 * If no Symbol is already associated with that string, then a new one is created and returned;
 * otherwise, the already existing Symbol is returned 
*/

/* Symbol.for() always returns the same value when called with the same string. */
let id1 = Symbol.for("id");
let id2 = Symbol.for("id");
 
alert(id1 === id2); // true