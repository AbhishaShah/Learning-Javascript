
// Create copy of new object without affecting original object values
const person1 = {
  name:"Abhi",
  position:"Developer",
  type:"Junior"
}

const hiredNew = newperson => ({
  ...newperson, // created new object 
  name:"Nish",
  type:"Senior"
});

console.log(hiredNew(person1));
/*
{
name:"Nish",
position:"Developer",
type:"Senior"
} */
console.log(person1);
/* 
{
name:"Abhi",
position:"Developer",
type:"Junior"
}*/

// pure function with .filter (return new array based on boolean condition)
const games = ["Cricket","Football","Chess"];

const multiplayerGames = (singlePlayerGame,games) => games.filter(game => game !== singlePlayerGame);

console.log(multiplayerGames("Chess",games).join(",")); // Cricket,Football

console.log(games); // ["Cricket","Football","Chess"]; => original array will not modified

// pure function with .map (return new array based on transforamtion)
const appendText = games.map(game => `${game} game`);
console.log(appendText); // Cricket game,Football game,Chess game

// pure function with .reduce(can be used to transform an array into any value, including a number, string, boolean, object, or function.)
const ages = [25,16,45,36,20,32];

const maxAge = ages.reduce( (max, age) => age > max ? age : max,0 );
console.log(maxAge); // 45