let user1 = {
    fname:"Shah",
    age:27,
    showData:function(fname,age){
        console.log(`Hello My name is ${fname} and I am ${age} years old.`);
    }
}

let user2 = null;

//check if user is not null and undefined, user has function property named showData then only invoked function.
console.log(user1?.showData?.("Patel","30")); // Hello My name is Patel and I am 30 years old.

console.log(user2?.showData?.()); //undefined