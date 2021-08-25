# ES2020 Additions

### **1. Conditional property access [Optional Chaining Operator]**

- When we try to access object or object's property which is null or undefined then javascript gives <i>TypeError</i>. To avoid this Optional Chaining Operator is useful.

- For example:
    ```Javascript
    let user = {
        name:"John",
        age:27
    };

    alert(user.address.street )  // will give error as address propety is not defined.
   ```
    **Before** 
    ```Javascript
    let user_street = user.address ? user.address.street : undefined;
    ```
     **Now** 
    ```Javascript
    let user_street = user.address?.street;
    ```
    The optional chaining **?. and ?.[]** stops the evaluation if the value before ?. is undefined or null and returns undefined.

### **2. Conditional Invocation**

- when you invoke a function, if the expression to the left of the parentheses is null or undefined or any other non-function, a TypeError is thrown. With the new **?.()** invocation syntax, if the expression to the left of the ?. evaluates to null or undefined, then the entire invocation expression evaluates to undefined and no exception is thrown.

### **3. First-defined operator(??)**
- It returns left operand if it's not null or undefined otherwise returns right operand.
- It works as short-circuiting, it only evaluates its second operand if first operand value is null or undefined
- It will allow first operand values as falsy values unlike || operator not allow any falsy or 0 or empty values.
    ```Javascript
    let maxwidth = 20;
    console.log(maxwidth ?? 500); // 500

    let minwidth = 0;
    console.log(minwidth ?? 100); // 0
    console.log(minwidth || 100); // 100 => || operator not allow any falsy values.
    ```