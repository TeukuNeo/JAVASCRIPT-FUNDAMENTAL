//Learn asynchronous consept in javascript

// Perbedaan antara async dan sync yang pertama
// synchronous berjalan secara berurutan
// synchronous merupakan proses default js
// sedangkan async berjalan secara waktu 
// pada async yang mana lambat dia belakangan sampai
// console.log(" I ")

console.log(" eat")

setTimeout(()=>{
 console.log(" ice cream")
}, 2500)

console.log(" with a")

console.log(" spoon ")


function one(call_two){
    call_two()
    console.log("step 1")
    
}


function two(){
    console.log("step 2")
}

one(two)

