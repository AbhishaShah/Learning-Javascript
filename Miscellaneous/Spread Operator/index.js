// combine two arrays
let languages = ['Java','Python'];
let newLanguages = ['Javascript','Node JS'];

let allLanguages  = [...languages,...newLanguages];
console.log(allLanguages); // ["Java", "Python", "Javascript","Node JS"]

// get remaining items of the array
const myarray = ["Abhi","28","12 Timber Roas","NJ","USA"];

const [name,age,...address] = myarray;

console.log(address.join()); //12 Timber Roas,NJ,USA
