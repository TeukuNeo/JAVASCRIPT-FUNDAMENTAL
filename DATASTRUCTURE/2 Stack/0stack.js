
// Creates a stack
// This is Stack algorithm
let Stack = function(){
  this.count = 0;
  this.storage = {}

  // Adds a value onto the end of the stack
  this.push = function(value){
      this.storage[this.count] = value;
      this.count++;
  }

  //removes and returns the value at the end of the stacks
  this.pop = function(){
      if(this.count === 0){
          return undefined;
      }

      this.count--;
      let result = this.storage[this.count]
      delete this.storage[this.count]
      return result;
  }

  this.size = function(){
      return this.count;
  }

  //returns the value at the end of the stack
  this.peek = function(){
      return this.storage[this.count-1]
  }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

myStack.push("racecar");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());