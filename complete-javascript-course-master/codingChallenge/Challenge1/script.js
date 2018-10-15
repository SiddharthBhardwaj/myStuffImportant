/************************
 * Challeng 1 Accepted
 */

 var massMark = prompt("Enter Mark's mass (in kg)");
 var heightMark = prompt("Enter Mark's height (in m)");
 var massJohn = prompt("Enter John's mass (in kg)");
 var heightJohn = prompt("Enter John's height (in m)");

 var bmiMark, bmiJohn;

 bmiMark = massMark / (heightMark * heightMark);
 bmiJohn = massJohn / (heightJohn * heightJohn);

 var result = bmiMark > bmiJohn;

 console.log("Is Mark's BMI higher than John's? " + result);    