
const recipeContainer = document.getElementById('categories');

const recipeUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

function createNode(element){
 return document.createElement(element);
}
function append(parent,child){
    parent.appendChild(child);
}
let data = {
    name:"Learning fetch api with POST request"
}

/* Way1: Create object with all post request data and add as second parameter to fetch 
 let fetchData = {
     method:"POST",
     body:data,
     headers:new Headers()
 }
*/

/* Way2: Using Request constructor [we are implementing this here]
 The request variable should be set equal to new Request. 
 The new Request construct takes two arguments: the API url and an object. 
 The object should also include the method, body, and headers keys just like fetchData
*/

let requestData = new Request(recipeUrl,{
    method:"POST",
    body:data,
    headers:new Headers()
});

// call fetch with passing api url
// Now, rerequestData  can be used as the sole argument for fetch() since it also includes the API url:
fetch(requestData)

 // get response
 .then(response => {
     return response.json();
    }) // The json() method actually returns a Promise, so we will need to create a Promise chain.
 .then(data => { // actual data to map
   const meals = data.categories;
   return meals.map(recipe => {
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

 // if error then print error here
 .catch( error => console.log(error));