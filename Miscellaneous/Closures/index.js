// Simple closure
function getFullName(firstName,lastName){

    return function(){
        console.log(firstName + " " + lastName);
    }

}

let fullname = getFullName("Abhi","shah");
fullname(); // Abhi Shah

// closure with global, outer and inner variables
let global = 1;
function addCounter(){
    let outer = 2;

    function add(){
        let inner = 3;
        global++;
        outer++;
        inner++;
        console.log(`global= ${global} , outer= ${outer} , inner= ${inner}`);
        return global + outer +inner;
    }
    return add;

}

let counter = addCounter();
console.log(counter());
console.log(counter());
// global= 2 , outer= 3 , inner= 4
// 9
// global= 3 , outer= 4 , inner= 4
// 11

function sum(a){
    return function(b){
        return a+b;
    }
}

console.log(sum(10)(20)); //30

// Filter array
function inBetween(a,b){
    return function(x){
     return a <= x && b >= x;
    }
  }
  
  let arr1 = [10,20,30,40];
  console.log(arr1.filter(inBetween(20,40))); //[ 20,30,40]