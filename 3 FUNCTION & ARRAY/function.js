function mahasiswa(){
    console.log("ini mahasiswa")
}
mahasiswa()

const bilangan = function(a, b){
    console.log(a, b)
}
bilangan(5, 10)

function name(){
    for(i = 0; i<arguments.length; i++){
     console.log("Nama saya: " + arguments[i])
    }
}

// cara pertama keywrd new function
const sum1 = new Function('x', 'y', 'console.log(x+y)')

//cara kedua
function sum2(x, y){
    console.log(x + y)
}

//cara ketiga arrow function
const sum3 = (x, y) => {
    console.log(x + y)
}

sum1(2, 3)
sum2(6, 6)
sum3(7, 9)