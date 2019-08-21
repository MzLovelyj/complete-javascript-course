/**Primitive Javascript Data Types
 * 1. Number: floating point numbers, for decimals and integers.
 * 2. String: Sequence of characters used for text
 * 3. Boolean: Data type of a variable that does not have a value yet
 * 4. Undefinded: Data tyoe of a variable that does not have a value yet
 * 5. Null: Also means NON-Existent
 */

/****************************
 * variable and Data Types
 * Lession 1
 **/

/** 
var firstName = 'Jess';
var lastName = 'Palacios';
var age = 31;
console.log('what is the name value? ' + firstName + ' ' + lastName);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
//console.log results in Undefinded 
//because the variable is Job but didn't assign a value to the variable. 

job = 'Teacher';
console.log(job);

var _3years = 3;
var johnMark = 'John and Mark';
*/

/*****************************************
 * Variable mutation and type coercion
 * Lession 2
 */

/** 
var firstName = 'Jess';
var age = 31;

//tyoe coercion
console.log(firstName + ' ' + age);

//assigining more than one variable.
var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' ' + 'is a '+ age + ' ' + 'year old '+ job + '. Is she married? '+ isMarried);

//variable mutuation
age = 'thirty one';
job = 'driver';
alert(firstName + ' ' + 'is a ' + age + ' ' + 'year old ' + job + '. Is she married? ' + isMarried);

var lastName = prompt('What is her last name?');
console.log(firstName + 's'+ ' last name is ' + lastName );
*/

/*****************************************
 * Basic Operators
 * Lession 3
 */
/** 
var now,yearJess, yearMark
var now = 2019;
//so we dont repeat the year in the variables belonging to people.
ageJess = 31;
ageMark = 33;

//Math operators
var yearJess = now - ageJess;
var yearMark = now - ageMark;

console.log('Jessica\'s birth year is ' + yearJess);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical Operators 
// If we want to compare the age of Jess & Mark we can use logical operators.
var jessOlder = ageJess > ageMark;
console.log(jessOlder); // will show false since Mark is older. 

//typeof Operator
//keyword that will return the type of a variable when you call it. 
//You can use this to validate function parameters or check if variables are defined. 
console.log(typeof jessOlder);
console.log(typeof ageJess);
console.log(typeof 'Mark is older than Jess.');
var x;
console.log(typeof x); // undefined since we didnt declare above.
*/

/*****************************************
 * Operator precedence
 */

var now = 2019;
var yearJess = 1988;
var fullAge = 31;
//2019 - 1988 is it greater or equal to 18?


// Multiple operators
var isFullAge = now - yearJess >= fullAge; // true
//2019 - 1988 is it greater or equal to 18?
console.log(isFullAge);

// Grouping
var ageJess = now - yearJess;
var ageMark = 35;
var average = (ageJess + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
//x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);




