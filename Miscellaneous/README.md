# Miscellaneous operators / functions

### **1.The in Operator**
- It evaluates to **true** if left side value is a name of property of the right side of object.
    ```Javascript
        let point = {x:1,y:2};
        console.log("x" in point); // true => Object point has property named "x"
        console.log("z" in point); // false => Object point has  no property named "z"
    ```

### **2.The instanceof Operator**
- It evaluates to **true** if left side object is an instance of rignt side of class.
    ```Javascript
        let d = New Date();
        console.log(d instanceof Date); // true 
        console.log(d instanceof Number); // false 
    ```