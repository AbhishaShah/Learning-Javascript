## Destructuring assignment [ES6]
- Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
- That is, we can extract data from arrays and objects and assign them to variables.
- Before:
    ```Javascript
    let myData = ["Abhi","Shah","27","10 Mountanios Dr","ON","Canada"];
    let firstname = myData[0];
    let country = myData[5];

    console.log(firstname); // Abhi
    console.log(country); // Canada
    ```
- Using Destructuring assignment:
    ```Javascript
    let [firstname,lastname,age,...address] = ["Abhi","Shah","27","10 Mountanios Dr","ON","Canada"];

    console.log(firstname); // Abhi
    console.log(age); // 27
    console.log(address); //(3) [ "10 Mountanios Dr","ON","Canada"]
    ``` 