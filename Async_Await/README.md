## **Async**
 - **Async** functions enable us to write promise based code as if it were synchronous, but without blocking the execution thread. 
 - It operates asynchronously via the event-loop. 
 - Async functions will always return a value. Using async simply implies that a promise will be returned, and if a promise is not returned, JavaScript automatically wraps it in a resolved promise with its value.
 ```Javascript
    async function firstAsync() {
    return 27;
    }
    firstAsync().then(alert); // 27
 ```

## **Await**
 - **Await** operator makes JavaScript wait until the promise returns a result.
 - It can be used inside an Async block only. 
    ```Javascript
    async function sequence() {
    await promise1(50); // Wait 50ms…
    await promise2(50); // …then wait another 50ms.
    return "done!";
    }
    ```