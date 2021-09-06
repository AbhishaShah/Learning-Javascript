/* *** bind() Method used *** */
var car = {
    registrationNo:"GJ234",
    name: "Toyota",
    displayDetails(){
      console.log(this.registrationNo + " " + this.name);
    },
    ownerDetails(ownername){
        console.log("Congratultaions " + ownername);
    }
  }
  car.displayDetails(); //GJ234 Toyota
  
let myCar = car.displayDetails;
  myCar(); // error: Uncaught TypeError: Cannot read property 'registrationNo' of undefined

let myCar1 = car.displayDetails.bind(car); // bind `this` keyword to car object
myCar1(); // GJ234 Toyota

let myCar2 = car.ownerDetails.bind(car,"Shah"); // Congratultaions Shah
myCar2();

// callback function
const counter = {
    count: 0,
    addCounter(){
    console.log(this);
    this.count++;
    }
  }
  
  document.querySelector('.btn').addEventListener('click',counter.addCounter.bind(counter));

// bind with optionl arguments
function sayGreetings(greeting){
  console.log(greeting + " " +this.name);
}

const obj1 = {
  name:"Abhi"
}

const obj2 = {
  name:"Nish"
}

const obj1Greetings = sayGreetings.bind(obj1,"Hello");
obj1Greetings(); // Hello Abhi

const obj2Greetings = sayGreetings.bind(obj2,"Hi");
obj2Greetings(); // Hi Nish

// The Call() method
car.displayDetails.call(car); // car.displayDetails.call(car);
car.ownerDetails.call(car,"Patel"); // Congratultaions Patel


// The apply method
car.ownerDetails.apply(car,["Kapoor"]); //Congratultaions Kapoor

// First class functions
function formalGreeting() {
  console.log("How are you?");
}
function casualGreeting() {
  console.log("What's up?");
}
function greet(type, greetFormal, greetCasual) {
  if(type === 'formal') {
    greetFormal();
  } else if(type === 'casual') {
    greetCasual();
  }
}
greet('casual', formalGreeting, casualGreeting); // 'What's up?'

// Higher order functions
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
function mapForEach(arr, fn) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray.push(
      fn(arr[i])
    );
  }
  return newArray;
}
const lenArray = mapForEach(strArray, function(item) {
  return item.length;
});
console.log(lenArray); // [ 10, 6, 3, 4, 1 ]