/*
Define stack and its methods: push, pop, peek, isEmpty, clear, size 
*/

const Stack = function() {
    this.items = [];
    this.count = 0;

    // Adds a value to the end of stack
    this.push = value => {
        this.items[this.count] = value;
        this.count++;
    }

    //Removes and return the value at the end of stack
    this.pop = () => {
        if(this.count ===  0) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count]
        delete this.items[this.count];
        return result;
    }

    // Returns the value from the end of stack 
    this.peek = () => {
        return this.items[this.count-1];
    }

    //Check stack is empty or not
    this.isEmpty = () => {
        return this.count === 0;
    }

    //Removes all the items from stack
    this.clear = () => {
        this.count = 0;
    }

    //Check length of stack
    this.size = () => {
        return this.count;
    }
}

let stack = new Stack();
stack.push("PHP");
stack.push("React");
stack.push("Node");
console.log(stack);

console.log(`Removed item: ${stack.pop()}`);

console.log(`Top item: ${stack.peek()}`);

stack.push("ES6");
console.log(stack);

console.log(`Is stack empty?: ${stack.isEmpty()}`);
console.log(`Stack size: ${stack.size()}`);
stack.clear();
console.log(`Stack size after emptied: ${stack.size()}`);
