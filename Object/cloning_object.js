 /* *** Objects are called by reference ***  */
 
 /*  Here object1 and ref_object1 reference the same object in the memory 
    so modification in one object also update the other object.
 */

 let object1 = {
     name:"Shah",
     age:27
 }

 let reference_of_object1 = object1; 
 console.log(reference_of_object1); // {name: "Shah", age: 27}

 reference_of_object1.name = "Patel;";
 console.log(object1); // {name: "Patel;", age: 27}

/* *** Shallow copy : Some values are still connected to the original variable *** */

let object2 = {
  firstname:"Joe",
  lastname:"Dowe",
  address: {
      street:"101, Flamingo dr",
      city:"Mountain view",
      country:"USA"
  }
}
let shallow_copy_object2 = Object.assign({},object2);

shallow_copy_object2.firstname = "Rachelle";
shallow_copy_object2.address.street = "12, Timber Cresent";

console.log(object2); // { firstname: "Joe", lastname: "Dowe", address: { city: "Mountain view",country: "USA",street: "12, Timber Cresent"} }
//The reason is that the address is reference value while the first name is a primitive value. 


 /*  *** Deep copy: To make a new copy the object  *** */

 let object3 = {
  firstname:"Rose",
  lastname:"Peter",
  address: {
      street:"1,Mountaniour Dr",
      city:"Mountain view",
      country:"Canada"
  }
}
 let copy_object3 = JSON.parse(JSON.stringify(object3));
 copy_object3.firstname="Monica";
 copy_object3.address.street = "5,Rosewood Dr "

console.log(object3); // { firstname: "Rose", lastname: "Peter",  address: {street: "1,Mountaniour Dr", city: "Mountain view", country: "Canada"} }

console.log(copy_object3); // {firstname: "Monica", lastname: "Peter", address: {street: "5,Rosewood Dr ", city: "Mountain view", country: "Canada"} }

