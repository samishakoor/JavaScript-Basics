// Basic Operators

// Math operators
const now=2007;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3   ( 2 * 2 * 2 = 8 )

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);      //actually we are concatinating strings


// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; //x = x - 1
x--;
console.log(x);

// Comparison operators   (>, <, >=, <=)    (comparison operators returns true or false)     
console.log(ageJonas > ageSarah);          // displays true on console 
console.log(ageSarah >= 18);               // displays true on console 

const isFullAge = ageSarah >= 18;           // now the isFullAge will hold a boolean value

console.log(now - 1991 > now - 2018);        // displays true on console
