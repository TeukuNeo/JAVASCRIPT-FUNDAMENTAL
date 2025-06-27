
// Deret fibonacci menggunak looping for dan array
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5

function deretFibonacci(n){

    output = []
    
    if(n === 0){
      output = [0]
    }
    else if(n === 1){
      output = [1]
    }else{
        output = [0, 1, 1, 2]

        for(let i = 0; i<n; i++){
           output.push(output[output.length - 2] + output[output.length - 1])
        }
    }

   return output
}deretFibonacci(5)