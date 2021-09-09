
const recipeContainer = document.getElementById('categories');

const recipeUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

function createNode(element){
 return document.createElement(element);
}
function append(parent,child){
    parent.appendChild(child);
}
// call fetch with passing api url
fetch(recipeUrl)

 // get response
 .then(response => response.json()) // The json() method actually returns a Promise, so we will need to create a Promise chain.
 .then(data => { // actual data to map
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
   return mealsCategory; // arrow function requie return value
 })

 // if error then print error here
 .catch( error => console.log(error));