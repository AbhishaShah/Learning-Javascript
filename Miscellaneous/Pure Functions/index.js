
// Create copy of new object without affecting original object values
const person1 = {
  name:"Abhi",
  position:"Developer",
  type:"Junior"
}

const hiredNew = newperson => ({
  ...newperson, // created new object 
  name:"Nish",
  type:"Senior"
});

console.log(hiredNew(person1));
/*
{
name:"Nish",
position:"Developer",
type:"Senior"
} */
console.log(person1);
/* 
{
name:"Abhi",
position:"Developer",
type:"Junior"
}*/