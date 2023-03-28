// Type Conversion(Explicit) and Coercion (Implicit)

// type conversion   (we manually convert the type of variable (from one type to other type))
const inputYear = '1991';
console.log(inputYear + 18);                     //inputYear is a string but 18 is considered as a string because we are concatinating a string with a number which is not possible so to solve this , 18 is convertes to string
console.log(Number(inputYear), inputYear);       // now we have converted the string into a number by type conversion
console.log(Number(inputYear) + 18);
//when we want to convert a string (lets say "Hello") into a number by type conversion then NaN is returned beacuse we cannot convert Hello into a number
console.log(Number('Jonas'));           // displays NaN (not a number)  because here string "jonas" cannot be converted into a number (only if a string is number then it can be converted into number using type conversion)
console.log(typeof NaN);                // displays "number"   ,  actually NaN is a number but invalid number that's why "number" is displayed on console

console.log(String(23), 23);            // here , 23 is a number but converted into a string using type conversion


let result=Number(false);
console.log(result);                  // 0 is the output

result=parseInt('20.01');             //parseInt()  converts the given argument into an integer 
console.log(result);                  // 20 is output

result=parseFloat('20.01');             //parseInt()  converts the given argument into a float  
console.log(result);                    //  20.01 is output

// type coercion    (java scrpit automatically converts the types behind the scenes)
console.log('I am ' + 23 + ' years old');             // when we are concatenating number(or numbers) with string(or strings) , then number is also converted to string automatically by javaScript because plus(+) sign is used to concatenate the strings and numbers
console.log('23' - '10' - 3);                         // here the javaScript converts strings into numbers (rather than converting number into string) because minus(-) sign is used to concatenate the strings and numbers (so in this case 23-10-3=10 is displayed on console)
console.log('5'+2+'3');                         // 523 is displayed because 2 is converted to string because of plus sign by javascript automatically
console.log('23' / '2');                        // strings are converted to numbers and then division is performed on both numbers
console.log('5'>'2')                            // displays true

let n = '1' + 1;                   // because of plus sign number is converted to string (i-e, 1 is converted to '1') , so n='11' 
n = n - 1;                         //because of minus sign the string is converted to number (so '11' is converted to 11 and then 11-1=10) so n=10 
console.log(n);


const num='4'
result=num-true;                      //here true is considered as 1     
console.log(result);                  // 3 is the output

console.log("sami"+9+4+"shakoor")
console.log("sami"+" "+(9+4)+" "+"shakoor")


// it is preferred to use type conversion
