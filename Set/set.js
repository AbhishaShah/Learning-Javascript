
// create a new Set called languageSet with an array/iterable values
// Note: that duplicates are removed when creating new Sets and adding values
const languageSet = new Set(['JS', 'Java', 'Python', 'Python']);

// .foreach()
// loop over each entry in the Set using Set's forEach() method
languageSet.forEach(value => console.log(value)); // JS , Java, Python

// .entries()
// It will log value as both the key and the value.
console.log(...languageSet.entries());
/* 
(2) ["JS", "JS"]
(2) ["Java", "Java"]
(2) ["Python", "Python"]
*/

// .keys()
// list of all keys
console.log(...languageSet.keys()); // JS , Java, Python

// .values()
// list of all values
console.log(...languageSet.values()); // JS , Java, Python

// .add()
// add new value in the set
console.log(...languageSet.add('Go')); // JS Java Python Go 

//The .add() method returns the Set. Thus, .add() can be chained.
console.log(...languageSet.add('TypeScript').add('Swift')); //JS Java Python Go TypeScript Swift 


// .delete()
// delete value from the set
console.log(languageSet.delete('Java')); // true => finds value so return true
console.log(languageSet.has('Java')); // false => we alreay remoevd it

// .clear()
//Clear all ordered values
languageSet.clear();

// .size()
// Get current size of Set (number of values)
console.log(languageSet.size); // 0


