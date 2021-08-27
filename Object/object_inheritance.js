let user = {
    name:"Shah",
    age:27,
    country:"India"
};

let address = Object.create(user); // inhertis properties of user
address.street="110,Timber Dr";
address.postalcode = "L8R";

address.country="Canada";

console.log(address.country); // Canada
console.log(user.country); // India => Prototype not affected
