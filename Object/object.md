# Object    
- Object is an unordered collection of properties with name and value pair.

- With having its own properties, a Javascript object can also inherit the properties of other objects which know as  **"Prototype"**.

- Objects are mutable and manipulated by reference rather than by value.
    ```Javascript 
    let obj1 = {x:10,y:20};
    let obj2 = obj1;
    ```
    Here obj1 is an object and obj2 holds the reference of obj1 not the copy of object obj1. So any modification made in object obj1 will also reflect in obj1.

- 3 ways we can copy the object ( Check examples in Cloning_object.js)
    1. Copy by reference
    2. Shallow copy
    3. Deep copy