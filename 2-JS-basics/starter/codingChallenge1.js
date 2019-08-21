/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/
//1. Store Mark's and John's mass and height in variables
var marksWeight = 84; //kg or 185lbs
var marksHeight = 1.74; //Meters = 5ft 7in

var johnWeight = 94; //kg or 207lbs
var johnHeight = 1.56; //Meters = 5ft 11in

//2. Calculate both their BMIs
/**Formula: weight (kg) / [height (m)]2
The formula for BMI is weight in kilograms divided 
by height in meters squared. If height has been measured 
in centimeters, divide by 100 to convert this to meters. */

var BMIMark = marksWeight / (marksHeight * marksHeight);
var BMIJohn = johnWeight / (johnHeight * johnHeight);
console.log(BMIMark, BMIJohn);

//** 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.*/
var markHigherBMI = BMIMark > BMIJohn;

//4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

console.log('Is Mark\'s BMI higher than John\'s ? ' + markHigherBMI );
