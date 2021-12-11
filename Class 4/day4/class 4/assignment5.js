

//Create a BMI function for health

const userWeight = 62;
const userHeight = 5.6

const bmiCal = (weight, height) =>{
const heightMeter = height * 0.3048;
console.log(heightMeter);

const bmi = weight / heightMeter **2;
console.log(bmi);
if (bmi >= 18.5 ){
    return 'underweight'
} else if(bmi >= 18.5 && bmi <= 24.9){
    return 'Normal weight'
}else if( bmi >= 25 && bmi <= 29.9){
    return 'Over height'
}else if( bmi >= 30 && bmi <= 34.9){
    return 'Ovesity class I'
}else if( bmi >= 35 && bmi <= 39.9){
    return 'Ovesity class II'
}else {
    return 'ovesity class III'
}
}


console.log(bmiCal(userWeight, userHeight));
