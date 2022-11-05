// Exercise 1 - initialise these variables

const FUTURE_YEAR = 2045; // don't change this
let firstName;
let birthYear;

// write your code here :


// Work out your age in 2045.
let futureAge;
// write your code here :


// Exercise 2 - initalise these variables to show their type

let firstNameType;
let birthYearType;
let futureAgeType;
let firstNameBirthYear = firstName + birthYear;
let firstNameBirthYearType;

// write your code here :



// Exercise 3

let numbersFirst;
let stringFirst;

// write your code here :

numbersFirst;
stringFirst;

// Exercise 4 - you'll need to add a const and initialise these variables
// From now on add the initialisation on the same line as the declaration of variables

let fiveDays;
let thirtyDays;
let oneYear;
let fiveYears;

// Exercise 5 - you'll need another const

let fiveDaysCost; 
let thirtyDaysCost;
let oneYearCost;
let fiveYearCost;

// Exercise 6 - you'll need another CONST

let fiveYearCostInflation;

// Excercise 7
/* 
Look at the code below to see how to inject the value of a variable to the page
Edit the html file to add what you need, then write JS below to target that element 
*/

// write your code here :



// Exercise 8
/* 
No help on this one. Write the html element you need in the html file and the JS to target it 
*/

// write your code here :



// Exercise 9 - Scope - don't touch the const declaration

const VARIABLE_ONE = "global scope";

// Delete these two - they were needed to stop the file breaking for previous exercises & these variables are declared later in the code
var variableTwo;
let variableThree;

// Place the folllowing 3 lines into the correct places - make sure there are no errors in the console 

document.getElementById('global-scope').textContent = VARIABLE_ONE;
document.getElementById('function-scope').textContent = variableTwo;
document.getElementById('block-scope').textContent = variableThree;

/* Don't change anything below here, just paste the above lines in */

function displayScope() {
  var variableTwo = "function scope";

  if (1 > 0) {
    let variableThree = "block scope";
    document.getElementById('block-scope').textContent = variableThree;
  }
}

displayScope();



/* *********************************************************************************** */
/* DO NOT TOUCH ANYTHING BELOW HERE */
/* *********************************************************************************** */

// Excercise 1
document.querySelector('h1').textContent = "About " + firstName;
document.getElementById('first-name').textContent = firstName;
document.getElementById('birth-year').textContent = birthYear;
document.getElementById('future-age').textContent = futureAge;

// Exercise 2
document.getElementById('first-name-type').textContent = firstNameType;
document.getElementById('birth-year-type').textContent = birthYearType;
document.getElementById('future-age-type').textContent = futureAgeType;
document.getElementById('name-birth-year-type').textContent = firstNameBirthYearType;

// Exercise 3
document.getElementById('numbers-first').textContent = numbersFirst;
document.getElementById('string-first').textContent = stringFirst;

// Exercise 4
document.getElementById('five-days').textContent = fiveDays;
document.getElementById('thirty-days').textContent = thirtyDays;
document.getElementById('one-year').textContent = oneYear;
document.getElementById('five-years').textContent = fiveYears;

// Exercise 5
document.getElementById('five-days-cost').textContent = fiveDaysCost;
document.getElementById('thirty-days-cost').textContent = thirtyDaysCost;
document.getElementById('one-year-cost').textContent = oneYearCost;
document.getElementById('five-year-cost').textContent = fiveYearCost;

// Exercise 6
document.getElementById('five-year-cost-inflation').textContent = fiveYearCostInflation;