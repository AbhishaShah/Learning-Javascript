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
# **Spread Parameters**: 
-  It spread the array into the list of arguments.
    ```Javascript
        let numbers = [20,45,30,10,15];
        console.log(max(...numbers)); //45
    ``` 