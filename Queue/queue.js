/*
Define Queue and its methods: print enqueue, dequeue, front, rear, isEmpty, size 
*/

const Queue = function() {
    items = [];

    // Prints values of queue
    this.print = () => {
       console.log(items);
      }

    // Adds a value to the end of queue
    this.enqueue = value => {
      items.push(value);
    }

    //Removes item from top of the queue
    this.dequeue = () => {
        return items.shift();
    }

    // Returns the first item in the queue
    this.front = () => {
        return items[0];
    }

     // Returns the last item in the queue
     this.rear = () => {
        return items[items.length-1];
    }

   // Returns the last item in the queue
    this.isEmpty = () => {
        return items.length === 0;
    }

    //Check length of queue
    this.size = () => {
        return items.length;
    }
}

let queue = new Queue();
queue.enqueue("PHP");
queue.enqueue("React");
queue.enqueue("Node");
queue.print();

console.log(`Removed item: ${queue.dequeue()}`);

console.log(`First item: ${queue.front()}`);

queue.enqueue("ES6");
console.log(`Last item: ${queue.rear()}`);

console.log(`Is queue empty?: ${queue.isEmpty()}`);
console.log(`queue size: ${queue.size()}`);

