
// DEFAULT PARAMS

function add(numArray = []){
    let total = 0
    numArray.forEach((element) => {
        total = total + element
    })
    console.log(total)
}
add()
// Output is 0

