// Array destructuring    
let [firstname,lastname,age,...address] = ["Abhi","Shah","27","10 Mountanios Dr","ON","Canada"];

console.log(firstname); // Abhi
console.log(age); // 27
console.log(address); //(3) [ "10 Mountanios Dr","ON","Canada"]

// Skip items into array using comma
let [firstname,lastname,,,,country] = ["Abhi","Shah","27","10 Mountanios Dr","ON","Canada"];
console.log(firstname); // Abhi
console.log(lastname); // Shah
console.log(country); // Canada

// Destructuring Assignment with Functions
function myData() {
    return ["Abhi","Shah","27","10 Mountanios Dr","ON","Canada"];
  }
  
  let [firstname,lastname,age,...address] = myData();
  
  console.log(lastname); //Shah
  console.log(address.join(",")); //10 Mountanios Dr,ON,Canada

// Using default values
let[greetings="Hello",fname="All"] = ["Good Morning"];
console.log(`${greetings} ${fname}`);  // Good Morning All

// Swap the values of variables
let [a,b] = [10,20];
[a,b]=[b,a];
console.log(`a = ${a} and b = ${b}`);

// Object Destructuring
let person = {fullname:"Abhi Shah",position:"Developer",city:"Brampton"};

let {fullname,position,city} = person;
console.log(fullname); // Abhi Shah
console.log(position); // Developer
console.log(city); // Brampton

//variables in the object on the left hand side should have the same name as a property key in the object person. If the names are different, we'll get undefined:
let {sport,over,totalscore} = {sport:"Cricket",over:20,score:120};
console.log(sport); // Cricket
console.log(totalscore);  // undefined

// Using a new Variable Name: If we want to assign values of an object to a new variable instead of using the name of the property
let {sport,over,score:totalscore} = {sport:"Cricket",over:20,score:120};
console.log(totalscore); //120

// Using default values
let {book,readingTime:Time="20mins",perDay=1} = {book:"JS30"};
console.log(book); // JS30
console.log(Time); // 20mins
console.log(perDay); // 1

// Computed property
let food = "salad";
let { [food] : recipe  } = {salad:"Garden Salad",making_time:"10mins"};
console.log(recipe); // Garden Salad

// Object Destructuring can be used to assign parameters to functions
function jobPosition({name:position,location:jobplace} = {}) {
    console.log(`Job Required for ${position}`);
}

jobPosition({name:"UX Designer",location:"UK"});  //Job Required for UX Designer
jobPosition({name:"Product Manager"}); //Job Required for Product Manager


  

