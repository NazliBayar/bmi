var massJohn = 72;
var massMark = 89;
var heightJohn = 1.79;
var heightMark = 1.85;

var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiMark = massMark / (heightMark * heightMark);
console.log(bmiJohn , bmiMark);

var isJohnBmiHigher = bmiJohn > bmiMark;
console.log("Is John's BMI higher than Mark's? " + isJohnBmiHigher);