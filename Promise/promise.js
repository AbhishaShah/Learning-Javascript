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
    .catch(
      (error) => { console.log(error); }
    );
  
  // synchronous code
  console.log("Hello I will print first!");  
  /*  
    Hello I will print first!
    Error: Random number is not less than .5 
  */

// Promise Chaining
const promise1 = new Promise((resolve, reject) => {
    resolve('Promise1 resolved');
  });
  const promise2 = new Promise((resolve, reject) => {
    resolve('Promise2 resolved');
  });
  const promise3 = new Promise((resolve, reject) => {
    reject('Promise3 rejected');
  });
  promise1
    .then((data) => {
      console.log(data);  // Promise1 resolved
      return promise2;
    })
    .then((data) => {
      console.log(data);  // Promise2 resolved
      return promise3;
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);  // Promise3 rejected
    });
    
// Note — Generally only one catch() is enough for handling rejection of any promise in the promise chain, if it’s at the end of the chain.