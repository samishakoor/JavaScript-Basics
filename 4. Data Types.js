





/* we dont have to manually define the data type of value stored in
a variable . Instead, data types are determined automatically.
This process is called dynamic typing.


In javascript , there are two categories of data types (primitive and non-primitive)
1. Primitive Data Types (Number,string,boolean,undefined,symbol,BigInt)
2. Non-Primitive Data Types (Arrays,Objects etc)

*/


// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof(true));                  // typeof()  returns the actual type of value passed as an argument 
console.log(typeof(javascriptIsFun));
console.log(typeof 23);                     // we can use typeof without () brackets
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';                    // simply changing the value of variable (remember, when we change the value of variable , we dont use let before variable (let is only used when we declare a variable))
console.log(typeof javascriptIsFun);

let year;                      // year is declared but not initialized
console.log(year);             // 'undefined' is displayed on console  bacause year is not initialized
console.log(typeof year);      // 'undefined' is displayed on console      

year = 1991;                   
console.log(typeof year);

console.log(typeof null);         // 'object' is displayed on console (this is a bug in JS beacuse actually, 'null' should be displayed)



// undefined data type       (undefined is used for a variable that got declared and yet not assigned/initialized to a value (empty value))

let value;
console.log(value)
console.log(typeof value)             




