// Equality Operators: == vs. ===

// === operator is a strict equality operator and does not perform type coercion (for example if ('18'===18 then false is returned because '18' is a string and 18 is a number , so they are not equal ) )
// == operator does type coercion (for example if ('18'==18) then true is returned  because due to type coercion '18' is converted to integer 18 to satisfy  the condition )

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');



// === is preferred over ==  while comparing

/*

// prompt()  only works when we open a website (just like alert) but prompt() also recives an input from the user 
const favourite = Number(prompt("What's your favourite number?"));           //asking an input from a user and then type convert the input into a 'Number' and then store it in a constant favourite variable but if we dont type convert the input to a Number then favourite variable will store the input as a string
console.log(favourite);             //display the input on console
console.log(typeof favourite);         //type of favourite is a number (because of type convert to a number)

const fav = prompt("What's your fav number?");
console.log(fav);     
console.log(typeof fav);        //type os fav is a string


if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')   
} else {
  console.log('Number is not 23 or 7 or 9')
}


// just like === is a strict operator , similarly !== is also strict 

if (favourite !== 23) console.log('Why not 23?');         //strict !== inequality operator  

if (favourite != 23) console.log('Why not 23?');          //lose != inequality operator

*/