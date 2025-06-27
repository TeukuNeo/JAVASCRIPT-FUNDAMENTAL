
//Percabangan if-else dan Perbandingan
//pada contoh berikut digunakan fungsi math random untuk membuat nilai hasil percabangan jadi random
prompt("What is your name?")
prompt("What is their name?")

let loveScore = Math.random() * 100
loveScore = Math.floor(loveScore) + 1

if(loveScore > 78){
   alert("Your love score is " + loveScore + "%" + " Your love each other") 
}
if(loveScore > 30 && loveScore <= 78){
   alert("Your love score is " + loveScore + "%")
}
if(loveScore <= 30){
    alert("Your love score is " + loveScore + "%" + " you go together like oil and water")
}
