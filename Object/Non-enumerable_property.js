let user = {
    name:"Shah",
    age:27
};

user['country'] = "Canada";
Object.defineProperty(user,"salary" ,{
    value:'50,000$',
    enumerable:false
});

console.log(Object.keys(user)); // ["name", "age", "country"]

for(let p in user) {
    console.log(p); // name,age,country
}

// to make salary enumerable need to assign enumerable value as "true"
