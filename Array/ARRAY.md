# Array

- An **array** is a linear collection of elements, where the elements can be accessed via indices.

- Javascript allows to create arrays with values from different datatypes.

- In Javascipt Arrays are first class objects.

- By default arrays are copied by reference.

## Array Iterator methods
1. **forEach(value,[index,array])**
    - It iterate each array element in order.
    - It can modify original array.
        ```Javascript
        let data = [1,2,3,4,5];
        data.forEach(function(v,i,a) { a[i] = v * 2; } );
        console.log(data); // [2, 4, 6, 8, 10]
        ```
2. **map()**
    - It should return value with new array.
         ```Javascript
        let data = [1,2,3,4,5];
        let newArr = data.map(ele => ele * 2); 
        console.log(newArr); // [2, 4, 6, 8, 10]
        ```

3. **filter()**
    -  It returns new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
    - It will not modify original array.
        ```Javascript
        let data = [1,2,3,4,5];
        let newArr = data.filter(ele => ele > 2); 
        console.log(newArr); // [3, 4, 5]
        ```

4. **find()**
    -  Finds the first item which fulfills condition in array.
    -  If no element found then return undefined.
        ```Javascript
        let data = [1,2,3,4,5];
        let first = data.find(ele =>  ele > 3);
        console.log(first); // 4
        ```

5. **findIndex()**
    - Finds the first item's index  which fulfills condition in array.
    - If no element found then return undefined.
         ```Javascript
        let data = [1,2,3,4,5];
        let first = data.findIndex(ele =>  ele > 3);
        console.log(first); // 3
        ``` 
 6. **every()**: Returns true only if every element matched the criteria.
    
 7. **some()**: Returns true if at least one element matched the criteria. 

 8. **reduce(element,[initial value])**
    - It walks through the array element-by-element, at each step adding the current array value to the result from the previous step until there are no more elements to add and returns the single value.
         ```Javascript
        let data = [1,2,3,4,5];
        let sum = data.reduce(x,y => x + y , 0);
        console.log(sum); // 15
        ```       
9. **reduceRight(element,[initial value)**
    -  It works just like reduce(), except that it processes the array from right-to-left.  

## Array flattening methods [ES2019]
1. **flat(no of nesting])**
    - It creates and returns a new array that contains the same elements as the array it is called on, except that any elements that are themselves arrays are “flattened” into the returned array. 
        ```Javascript
        let data = [10,[20,[30,40]]];
        data.flat(2); // [10, 20, 30, 40]
        ```
2. **flatMap])**
    - It returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. 
        ```Javascript
        let greetings = ["Hello all", " ", "Good Morning"];
        greetings.map(word => word.split(" ")); // ["Hello", "all"] ,["", ""],["Good", "Morning"]
        greeting,flatMap(word => word.split(" "); //["Hello", "all", "", "", "Good", "Morning"]
        ``` 

## SubArrays methods 
1. **Slice(start [, end])**
    - Returns the array from start to (but not including) end. 
    - It will not modify original array.
        ```Javascript
        let data = [10,20,30,40,50];
        data.slice(1,4); // [20 ,30 ,40]
        ```
2. **Splice(start, length,inserting elements])**
    - It can delete elements from an array, insert new elements into an array, or do both at same time.
    - The first argument specifies array position at which deletion/insertion is to begin.
    - The secong argument specified number of elements that should be deleted from array.
    - After two any followed arguments consider as inserting elements,starting at the position specified by the first argument.
    - It will return deleted elements.
    - It will modify origianl array. 
        ```Javascript
        let data = [10,20,30,40,50];
        data.splice(2,4); // [30,40,50]
        console.log(`Modified array: ${data} `); // [10,20]

        data.splice(2,0,30,[40,50]); // [] => no elements removed
          console.log(`Modified array: ${data} `); // [10,20,30,[40,50]]
        ```
 3. **fill()**
    - It fills the array with specified value.      
       ```Javascript
        let data = new Array(5);
        data.fill(10); // [10,10,10,10,10]
        data.fill(20,2,4); // [10, 10, 20, 20, 10]
        ```