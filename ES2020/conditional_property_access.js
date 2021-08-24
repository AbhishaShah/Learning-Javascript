let user = {
    name:"Shah",
    age:27
};

console.log(user.address.street); // Uncaught TypeError: Cannot read property 'street' of undefined

//old way
console.log(user.address ? user.address.street ? user.address.street : null : null); // null

//new way
console.log(user?.address?.street); // undefined

console.log(user?.name); //Shah

console.log(user?.["name"]); //Shah

// Check object null condition
let address = null;
console.log(address?.city); // undefined
