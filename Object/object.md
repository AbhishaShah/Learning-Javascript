# Object    
- Object is an unordered collection of properties with name and value pair.

- With having its own properties, a Javascript object can also inherit the properties of other objects which know as  **"Prototype"**.

- Objects are mutable and manipulated by reference rather than by value.
    ```Javascript 
    let obj1 = {x:10,y:20};
    let obj2 = obj1;
    ```
    Here obj1 is an object and obj2 holds the reference of obj1 not the copy of object obj1. So any modification made in object obj1 will also reflect in obj1.

 ## Cloning Objects:
- 3 ways we can copy the object ( Check examples in Cloning_object.js)
    1. Copy by reference
    2. Shallow copy
    3. Deep copy

 ## Deleting proprties:
 
- The **delete** property removes property from object.  
- It only delete object's own properties,not inherited ones. 
- delete does not remove properties that have a configurable attribute of false. 
- Properties of the global object created through variable declaration and function declaration are non-configurable.
- In strict mode, attempting to delete a non- configurable property causes a TypeError. In non-strict mode, delete simply evaluates to false.

## Non-enumerable property:
- These Properties don't show up when iterated through particular object using object.keys or for..in loop.
- Object.defineProperty() lets you to create these read-only properties.

## Object Methods:
- **Object.create():** objects could be created using this method and their prototypes easily setup. (object inheritance concept).
- **Object.getPrototypeOf():** get an objects prototype. 
- **Object.defineProperty():** adds a property to an object with descriptors like value,writable,enumerable,configurable.
- **Object.getOwnPropertyDescriptor():** get the descriptors for the property.
- **Object.defineProperties():** adds multiple properties to an object with descriptors.
- **hasOwnProperty():** Checks object has own property with given name. It returns false for inherited property.
- **propertyIsEnumerable():** Check for own property having enumereble attrubute true. 
- **Object.keys():** get Array of all non-inherited, enumerable properties 
- **Object.getOwnPropertyNames():** get Array of all non-inherited properties including non-enumerable
- **toString()**
- **toLocaleString()**
- **valueOf()**