## Spread Operator [...]
- Useful to create new copy of an array.
 ```Javascript
 const arr1 = [10,20,30];
 const arr2 = [...arr1]; // [10,20,30]

 arr2.push(40);
 console.log(arr1); // [10,20,30] =>  original array will not changed by using spread operator
 console.log(arr2); // [10,20,30,40] 
 ```
- Spread operator combines the contents of arrays. 
