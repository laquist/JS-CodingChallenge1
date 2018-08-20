//1
let markWeight = 80;
let markHeight = 1.8;
let markBmi;

let johnWeight = 90;
let johnHeight = 1.8;
let johnBmi;


//2
function calcBmi(weight, height) {
    return weight / (height * height);
}

markBmi = calcBmi(markWeight, markHeight);
johnBmi = calcBmi(johnWeight, johnHeight);

console.log("Mark's BMI: " + markBmi);
console.log("John's BMI: " + johnBmi);

//3
let markHigherBmi = markBmi > johnBmi;

//4
console.log("Is Marks BMI higher than John's? " + markHigherBmi);