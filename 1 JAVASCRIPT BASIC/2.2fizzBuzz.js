
//Function array push with Fizz and Buzz using while loop
let output = [];
let count = 1;

function fizzBuzz(){
    
    while(count <= 100){
      if(count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz")
    }
    else if(count % 3 === 0){
        output.push("Fizz")
    }
    else if(count % 5 === 0){
        output.push("Buzz")
    }
    else{
        output.push(count)
    }
    count++;  
    }
    

    return output
}
fizzBuzz()
