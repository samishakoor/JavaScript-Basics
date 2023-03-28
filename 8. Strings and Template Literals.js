
// Strings and Template Literals (a template literal is also basically a string (a new method to write a string))
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

// we can cancatenate two or more strings to make a one new string using '+' operator 
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';        //jonas is a one string which is formed by concatenating so many strings using '+'
console.log(jonas);

// template literal (a new method of writing a string + we can store template literal in a variable as a string (the datatype of that variable will automatically become string))
const jonasNew = `I'm ${firstName}, \n\ a ${year - birthYear} year old ${job}!`;       // similar to (cout<<"I'm"<<firstName<<", a "<<year - birthYear<<" year old "<<job<<"!") in C++ 
console.log(jonasNew);

console.log(`Just a regular string...`);

//  in Java script,  \n\  means to start with new line
console.log('String with \n\ multiple \n\ lines');


// the above can also be written as 
console.log('String with \n\
multiple \n\
lines');

// similar to above method
console.log(`String
multiple
lines`);









