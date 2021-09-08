// Person  class created
class Person {
    constructor(firstname, lastname) { // initialize value using constructor
      this.firstname = firstname;
      this.lastname = lastname;
    }
  
    // method created
    fullName() {
      return `${this.firstname} ${this.lastname}`;
    }
  }
  
  // Developer class created
  class Developer extends Person { // inherit person class using extend keyword
    constructor(firstname, lastname, language) {
      super(firstname, lastname); // call parent class constructor using super keyword
      this.language = language;
    }
  
    fullNameWithLanguage() {
      return `${super.fullName()} working on ${this.language}`;
    }
  
    //static method created
    static isJSDev(employee) {
      return employee.language.toLowerCase() === 'javascript';
    }
  }
  
  // create instance of developer class
  const employee = new Developer("Abhi", "Shah", "Javascript");
  
  console.log(employee.fullName()); // Abhi Shah 
  
  console.log(employee.fullNameWithLanguage()); // Abhi Shah working on Javascript 
  
  // static method can only invoke through constructor/classname, not by instance
  console.log(Developer.isJSDev(employee)); //true
  
  
  