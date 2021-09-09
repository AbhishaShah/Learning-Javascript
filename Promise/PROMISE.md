##  **Asynchronous Programming** 
- Asynchronous Programming means one defines code now to occur later in the future while not blocking other code to run synchronously.
- For example:`setTimeout()`.
    ```Javascript
    // execute the passed function in 10'ish seconds in the future
    setTimeout(() => console.log('Ten seconds ago, you ask me to run this code'), 10000);

    // But keep executing code, don't wait for 10secs, and block all code execution
    console.log('I am not delayed by 10 seconds from running');       
    ```

## **Promise**
- A Promise used to handle asynchronous operations in JavaScript.
- **Why? :** To avoid callback hell (where each callback is nested inside another callback, and each inner callback is dependent on its parent), promise is used.
- **How it works? :**  The Promise constructor takes a function (an executor) that will be executed immediately and passes in two functions: **resolve** , which must be called when the Promise is resolved (passing a result), and **reject** , when it is rejected (passing an error).

```Javascript
// Creating Promise
    const myPromise = new Promise((resolve, reject) => {
        const randomNo = Math.random();
        if (randomNo < .5) {
            resolve(`We got ${randomNo} as Random number which is less than .5`)
        } else {
            reject(`Error: Random number is not less than .5`);
        }
    });

// Consuming Promise
    myPromise
    // The successCallback is called when a promise is resolved. It takes one argument which is the value passed to resolve().
    .then(
    (data) => { console.log(data); }
    )
    // The failureCallback is called when a promise is rejected. It takes one argument which is the value passed to reject().
    .catch ( 
    (error) => { console.log(error); }
    ); 
    
    // synchronous code
    console.log("Hello I will print first!");  
```  
- The good article on promise [here](https://blog.bitsrc.io/understanding-promises-in-javascript-c5248de9ff8f).