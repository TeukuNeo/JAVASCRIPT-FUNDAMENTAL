
//Kalkulator BMI dengan percabangan if-else
function bmiCalculator(weight, height){
    let bmi = weight / Math.pow(height, 2)
    bmi = Math.floor(bmi) + 1 //digunakan fungsi mtk Math.floor agar hasilnya bernilai bulat
    
    if(bmi <= 18.5){
      return "Your BMI is " + bmi +" So you are underweight"
    }
    if(bmi >= 18.5 && bmi <= 24.9){
      return "Your BMI is " + bmi + " So you have a normal weight"
    }
    else{
        return "Your BMI is " + bmi + " Your body mass is overweight"
    }
}