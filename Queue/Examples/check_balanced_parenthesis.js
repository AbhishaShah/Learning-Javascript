/*
An algorithm to check if an expressions (parentheses) given in a string are balanced or not.
Input:
'[{}]'
'[{}{}{}}]'

Output:
true
false

*/
const openBrackets = ['[', '{', '('];
const closeBrackets = [']', '}', ')'];


let checkBalancedParenthesis  = (str) => {

    let stack = [];

    for(let i = 0; i < str.length; i++){

        if(openBrackets.includes(str[i])){
            stack.push(str[i]);
        }

        if(closeBrackets.includes(str[i])){
            
            if(stack.length <= 0){
                return false;
            }
           
            let item = stack.pop();
        
            if(item == '{' && str[i] != '}'){
                return false;
            }
            else if(item == '[' && str[i] != ']'){
                return false;
            }
            else if(item == '(' && str[i] != ')'){
                return false;
            }
        }
    }
    if(stack.length <= 0) {  
        return true;
    }

    return false;
}

const result = checkBalancedParenthesis('[{}{}{}{}}]');

if(result) {
    console.log("Parenthesis are balanced!")
}
else{
    console.log("Parenthesis are not balanced!");
}