
//ARRAY Who is paying lunch name using math random function
function whosPaying(names){

    names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

    let randomOfPerson = names.length
    let pay = Math.floor(Math.random() * randomOfPerson)
    let randomPerson = names[pay]

    return randomPerson + " is going to buy lunch today"
}
whosPaying()
