// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare a variable called name with the value 'Dane', and then check if that name is the same as 'Mary'. 
// If the name had been Mary, we'd have said hi to mary, but instead we log to the console 'How do you do?'.
// 
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// initially we declare a variable named secret without assigning it a value. This results in secret holding the special js 
// value: undefined.
// we then define another variable named code and assign it the value 123. Next we check if the value of code is 123, and 
// because the value is 123 we assign to secret the value 'super' and double the value of code. 
// Next we check the value of code against 250, and because code isn't greater than 250 we move on to the next console log, 
// printing 'super' to the console.
// 
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We first declare some variables and assign some reasonable values to them, isStudent is true, age is 34, and zip is 55407.
// next we check if the zip is greater than 80000 and if isStudent is true. && statements only evaluate to true if both operands
// are true, and because zip's value is not greater than 80000, we skip over logging that we're a West Coast student, and move on
// to other logical checks. Now we check against the or statement, because age is not less than 30 and isStudent is true, we have two 
// falses, meaning an || operator will yield false, skipping the question about hobbies. Finally, because isStudent is true, the
// check against true for the variable isStudent is true, and we log to the console 'Welcome to Prime!'. 
// We skip the final else because only one if-else-if-else,etc. clause can be triggered, and it is the first condition to be true
// that is triggered.
// 

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // FIX - colorTwo = 'purple'; - we forgot to change colorTwo's value to purple, too
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// FIX - change the || symbols to &&. The instructions say to check if temp > 39 and time >=4
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
// FIX - change const to let - let minAge = 21; the instructions say that we start with two variables. We have a variable in age,
// but a constant in minAge
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

