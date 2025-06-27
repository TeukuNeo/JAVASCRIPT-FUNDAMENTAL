
//mencari jumlah sisa umur
function lifeInWeeks(age){
    let sisaTahun = 90 - age;
    let days = sisaTahun * 365;
    let weeks = sisaTahun * 52;
    let month = sisaTahun * 12;
    console.log(" You have " + days + " days, " + weeks + " weeks, and " + month + " months left")
}lifeInWeeks(56)
