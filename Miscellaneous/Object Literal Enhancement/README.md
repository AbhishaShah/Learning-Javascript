## Object Literal Enhancement
- Object literal enhancement is the opposite of destructuring. 
- It’s the process of restructuring or putting the object back together. 
- With object literal enhancement, we can grab variables from the global scope and add them to an object.
    ```Javascript
    const fname = "Abhi";
    const lname = "Shah";

    const person = {fname,lname};
    console.log(person); // {fname: 'Abhi', lname: 'Shah'} => fname and lname are now keys of person object
    ```