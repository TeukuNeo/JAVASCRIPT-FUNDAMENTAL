
// global Scope
let a = 2
console.log(a)



// function Scope/ local scope
function test(){
    let b = 4
    console.log(b)
}

test()

// note : jika mendeklarasikan variabel
// didalam function maka jangan lupa tulis
// tipe variabelnya agar variabel tersebut
// tidak di deklrasikan tidak kasat mata di luar function
