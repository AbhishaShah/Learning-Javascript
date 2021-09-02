
// Data Encapsulation

function createEmployee(){

  let employeeId = 0; // employee id can't be modify outside
   return class {
    constructor(name,role) {
      this.id=++employeeId;
      this.name=name;
      this.role = role;
    }
  }
}

const Employee = createEmployee();

const employee1 = new Employee("Abhi","Developer");
const employee2 = new Employee("Navya","Product Manager");

console.log(employee1); 
/* {
  id:1,
  name:"Abhi",
  role:"Developer"
  } */

console.log(employee2);
/* {
id:2,
name:"Navya",
role:"Product Manager"
} */

console.log(employeeId); //error: Uncaught ReferenceError: employeeId is not defined