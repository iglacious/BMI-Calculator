//Create your function below this line.
function bmiCalculator(weight, height){
    var bmi = weight/(Math.pow(height,2));
    return bmi;
}
//The first parameter should be the weight and the second should be the height.
bmiCalculator(65, 1.8); 

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
