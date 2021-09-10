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

/* Promise.finally() */

let stateOfLoading = 'Not Loading'; // this is the default state

fetch('https://swapi.co/api/peoples/') // breaks because the URL is people not peoples
    .then((response) => {
        if(!response.ok){ // run if fetch fails
            throw Error('api call broke'); // catch() is called
        }
        stateOfLoading = 'Loaded';
        return stateOfLoading; // passed from finally() to the last then() in chain
    })
    .catch(error => {
        stateOfLoading = 'Loading Error';
        return stateOfLoading; // passed from finally() to the last then() in chain
    })
    .finally(() => { // finally does not take in parameters
        // runs no matter what, because we want to return state to default
        // regardless of if the catch or then is fulfilled
        stateOfLoading = 'Not Loading';
    })
    /* Basically a finally() eliminates redundant functions in a then()
    
    The above finally is just shorthand for using a then() like so:
    .then(
        () => { // finally does not take in parameters
        // runs no matter what
        stateOfLoading = 'Not Loading';
        },
        () => { // finally does not take in parameters
        // runs no matter what
        stateOfLoading = 'Not Loading';
        },
    )
    */
    .then((data) => { // get value from previous catch() or then()
        // change the initial api call from /people to /peoples to get different values
        console.log(data); // either 'loaded' or 'loading error'
        console.log(stateOfLoading); // verify finally statement returned state to default
    });


/* Promise.all() */

Promise.all([
  fetch('https://api.github.com/repos/facebook/react/commits'),
  fetch('https://api.github.com/repos/facebook/react/stargazers')
])
.then(([commits, stargazers]) => {
  console.log(commits.ok, stargazers.ok); // true, true
});

/* Promise.race() */
  
Promise.race([
  fetch('https://api.github.com/repos/facebook/react/commits'),
  fetch('https://api.github.com/repos/facebook/react/stargazers'),
])
.then(response => {
  console.log(response.url); // logs whichever one finishes first
});


