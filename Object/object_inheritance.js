// setup an object to be used as the prototype 
let user = {
    name:"Shah",
    age:27,
    country:"India"
};

// create a new object address, setting the prototype of user object
let address = Object.create(user); 
address.street="110,Timber Dr";
address.postalcode = "L8R";

address.country="Canada"; // update property value

console.log(address.country); // Canada
console.log(user.country); // India => Prototype value not affected

// get a reference to the prototype of address object, using getPrototypeOf()
console.log(Object.getPrototypeOf(address)); 
/*  {
name:"Shah",
age:27,
country:"India"
} */

// Define object property with its descriptors
Object.defineProperty(user,'salary',{
    value:"50K",
    writable:false,
    enumerable:false,
    configurable:false
});

// get the descriptors for the salary property.
console.log(Object.getOwnPropertyDescriptor(user,'salary'));
/* {
value:"50K",
writable:false,
enumerable:false,
configurable:false
} */

// Checks object has own property with given name. It returns false for inherited property.
console.log(address.hasOwnProperty("name")); // false
console.log(address.hasOwnProperty("street")); // true

//get Array of all non-inherited, enumerable properties
console.log(Object.keys(user)); // [ "name", "age", "country" ]

// get Array of all non-inherited properties including non-enumerable
console.log(Object.getOwnPropertyNames(user)); // [ "name", "age", "country", "salary" ]