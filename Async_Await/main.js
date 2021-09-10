const recipeContainer = document.getElementById('categories');

const recipeUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

function createNode(element){
 return document.createElement(element);
}
function append(parent,child){
    parent.appendChild(child);
}

// add async keyword to arrow function, now this function returns a promise and can use await operator
const myAsyncfunction = async() => {
    // await pauses this function until the promise from fetch is fulfilled
    const response = await fetch(recipeUrl);

    // By writing “throw new Error” we are creating a new error object. Whenever we throw an error inside an asynchronous function, then the promise returned by it is rejected and thus, we can catch the error.
    if(response.status !== 200){
        throw new Error("Error: Not able to fetch data"); 
    }

    // await pauses this function until the promise from .json() is fulfilled
    const jsonData = await response.json();
    return jsonData; // jsondata is returned, but it is wrapped in a Promise
}   

// Now consume the async function, which returns a promise, with promise methods.

myAsyncfunction()
 .then(data => {
    const meals = data.categories;
    const mealsCategory=  meals.map(recipe => {
     let li = createNode("li");
     let h3 = createNode("h3");
     let span = createNode("span");

     h3.innerHTML = recipe.strCategory; // get category name 
     span.innerHTML = recipe.strCategoryDescription;  // get category description
     append(li,h3); // create li node with h3 and span element
     append(li,span);
     append(recipeContainer,li); // append whole li into ul container
   });
 })
 .catch(error => {
    console.log("rejected",error.message);
 });