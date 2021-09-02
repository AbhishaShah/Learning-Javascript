## **Closures**
- A closure gives access to an outer function’s scope from an inner function. (It means The inner functions access the variables of its  outer function, even after the outer function has returned.)
    ```Javascript
    function makeCounter() {
        let count = 0;
    
        return function() {
        return count++; // has access to the outer "count"
        };
    }
    
    let counter = makeCounter();
    
    alert( counter() ); // 0
    alert( counter() ); // 1
    alert( counter() ); // 2
    ```
- **Lexical Scope:**  A lexical scope or static scope in JavaScript refers to the accessibility of the variables, functions, and objects based on their physical location in the source code.

- In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.A lexical environment is a data structure that holds identifier-variable mapping. 
    ```Javascript
    let greeting = "Hello"; 
   // Lexical Environment: greeting:"Hello" -> outer:null
   // Here, Environment Record (variable store) and the arrow means the outer reference. The global Lexical Environment has no outer reference, that’s why the arrow points to null.
    ```

- The Lexical Environment object consists of two parts:

    1. **Environment Record** –  the actual place where the variable and function declarations are stored.
    2. A **reference to the outer lexical environment** means it has access to its outer (parent) lexical environment. 

- When the code wants to access a variable – the inner Lexical Environment is searched first in local, then the outer one, then the more outer one and so on until the global one.

- More info: https://javascript.info/closure