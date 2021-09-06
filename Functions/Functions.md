## **Function Declaration**: 
- Function declaration defined a function with specified arguments.
- A declared function is "saved for later use" and will be executed when its called with its name.
- It is "hoisted" which means we can call function before its declaration. 
    ```Javascript
    console.log(getRectArea(20,35)); // 700 => hoisting

    function getRectArea (width,height) {
        return width * height;
    }

    console.log(getRectArea(20,35)); // 700
    ```

## **Function Expression**: 
- Function expression allows to create anonymous function which does not have name and to execute function expression, it should be store in a variable (preferebly as const).
- It be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.
    ```Javascript
    const getRectArea = function (width,height) { return width * height };  
    console.log(getRectArea(20,35)); // 700

    // Function expressions are sometimes defined and immediately invoked:
    const tensquared = (function(x) {return x*x;}(10)); // 100
    ```
## **Arrow Function**: 
-  The general form of an arrow function is a comma-separated list of parameters in parentheses, followed by the => arrow, followed by the function body in curly braces:
    ```Javascript
    const getRectArea1 = (width,height) => { return width * height;};
    ```

## **Rest Parameters**: 
-  The rest of the parameters can be included in the function definition by using three dots ... followed by the name of the array that will contain them. The dots mean “gather the remaining parameters into an array”.
- The rest... always an array and must be last parameter in function.
    ```Javascript
      const myData = (firstname,lastname,...hobbies) => {
        console.log(firstname + " " + lastname);
        
        for(let hobby of hobbies) {
            console.log(hobby);
        }
    }
    myData("Joe","Sen","Music","Dancing","Gaming"); // Joe Sen Music Dancing Gaming
    ``` 
## **Spread Parameters**: 
-  It spread the array into the list of arguments.
    ```Javascript
    let numbers = [20,45,30,10,15];
    console.log(max(...numbers)); //45
    ``` 
## **Function Methods**:
- Points about `this` in Javascript
    - "this" always refer to an object.
    - "this" refers to an object which calls the function it contains.
    - In the global context “this” refers to either window object or is undefined if the ‘strict mode’ is used.

**The bind() method**:
- It creates new function where `this` refers to the object passed in the parameter.
`const myfunciton = function.bind(thisArg, optionalArguments)`

**The call() method**:
- It sets the `this` inside the function and immediatley executes that function. 
`function.call(thisArg,optionalArguments)`

**The apply() method**
- It is same as call() method except it accepts array of arguments instead of comma seperated values.
`function.apply(thisArg,[optionalArguments])`

**First class functions**
- Functions that can be assigned to any other variable or passed as an argument or can be returned by another function calles as First-class functions.
- JavaScript treat function as a first-class-citizens. This means that functions are simply a value and are just another type of object.

**Higher order functions**
- It receives function as an argument and returns the function as output.
- Array.prototype.map, Array.prototype.filter and Array.prototype.reduce are the Higher-Order functions.