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