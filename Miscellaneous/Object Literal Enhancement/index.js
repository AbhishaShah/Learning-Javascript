const fname = "Abhi";
const lname = "Shah";
const getFullName = function (){
  console.log(this.fname + " " + this.lname); // Abhi Shah
}

const person = {fname,lname,getFullName};
person.getFullName();