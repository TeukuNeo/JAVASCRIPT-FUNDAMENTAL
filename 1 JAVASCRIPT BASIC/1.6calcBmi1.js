
//membuat kalkulator BMI(Body Massa Index) sederhana
//Angka dua dalam kurung, mewakili variabel height yang dikalikan berapa kali
function bmiCalculator(weight, height){
    var bmi = weight / Math.pow(height, 2);
    return bmi
}
var bmi = bmiCalculator(65, 1.8)
console.log(bmi)

