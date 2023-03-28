// The Conditional (Ternary) Operator
const age = 23;

// the code before '?' is the CONDITION and the code after '?' and before ':' is that code which will be run if the condition satisfies(true) , and the code after ':' is that code which will run if the condition is not satisfied(false) (just like 'else' part of if/else statement) 
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

//The alternative to above code is
if (age >= 18) 
{
    console.log('I like to drink wine 🍷');
}
else
{
    drink2 = 'water 💧';
}

// if the code after ? or : returns a value (or returns something else) then this returned value must be stored in a variable
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';      // if age>=18 then wine will be returned and assigned to drink variable else water will be returned and assigned to drink variable
console.log(drink);

//the alternative to above code is
let drink2;                         //at this point , type of drink2 is undefined because drink2 is only declared not initialized
console.log(drink2);

if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);     //we can also use a tenary operator in a template literal


// Ternary operator is mostly used for one liner if/else statements(when we have one line of code in if and else blocks in if/else statement) but it cannot be a replacement of if/else because when we have a mass of code in if/else statements , then we will use if/else instead of ternary operator


// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

*/


const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

