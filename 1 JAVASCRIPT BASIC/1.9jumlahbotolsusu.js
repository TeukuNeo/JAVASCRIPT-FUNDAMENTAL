
//menghitung jumlah botol susu dibeli dan kembaliannya 
function getMilk(money){
    console.log("buy " + calcBottles(money, 1.5) + " bottles of milk.")
    return calcChange(money, 1.5)
}
function calcBottles(startingMoney, costPerBottle){
   let numberOfBottles = Math.floor(startingMoney / costPerBottle)
   return numberOfBottles
}
function calcChange(startingAmount, costPerBottle){
   let change = startingAmount % costPerBottle
   return change
}
console.log(" diberikan sisa duit beli susu " + getMilk(5))
