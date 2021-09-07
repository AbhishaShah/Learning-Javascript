
// create map with person and his age key-value pair as an Array, contained in an Array
let myMap = new Map([
    ["Abhi",27],
    ["Nish",30]
  ]); 
  
  // .foreach()
  // loop over each entry in the Map using Map's forEach() method
  myMap.forEach((value,key)=>console.log(`Person:${key} Age:${value}`));
  /* Person:Abhi Age:27 
  Person:Nish Age:30 */
  
  // .entries()
  // List of all key-value pairs
  console.log(...myMap.entries());
  /* ["Abhi", 27]
  (2) ["Nish", 30] */
  
  // .keys()
  // List of all keys
  console.log(...myMap.keys()); // Abhi Nish
  
  // .values()
  // List of all values
  console.log(...myMap.values()); // 27 30
  
  // has()
  // check for given key
  console.log(myMap.has("abhi")); // false => case-sensitive search
  console.log(myMap.has("Abhi")); //true
  
  // .get()
  // get value for given key
  console.log(myMap.get("Abhi")); // 27
  
  // set()
  // set new key value pair
  console.log(myMap.set("Navya",1)); 
  /* Abhi: 27
  Nish: 30
  Navya: 1 */
  
  // set existing key's value
  console.log(myMap.set("Nish",31)); 
  /* Abhi: 31
  Nish: 11
  Navya: 1
  */
  
  // .delete()
  // delete element using key name
  myMap.delete("Nish");
  /* Abhi: 27
  Navya: 1
  */
  
  // .clear()
  // clear all key-value pair
  myMap.clear();
  
  console.log(myMap.size); // 0