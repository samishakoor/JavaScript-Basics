// Arrow functions

// arrow function can be used as a one liner function
const calcAge3 = birthYeah => 2037 - birthYeah;     // the code between '=' and '=>' are the arguments passed to the function and after '=>' is the code inside the function  (in single liner arrow functions , the code after the '=>' is automatically returned )         
const age3 = calcAge3(1991);
console.log(age3);


// The alternative to arrow function is function expression 
const calcAge2 = function (birthYeah) {                                              
    return 2037 - birthYeah;                     // the returned value is stored in calcAge2 variable 
  }
const age2 = calcAge2(1991);
console.log(age2);

// we can still use arrow function when we have a mass of code
const yearsUntilRetirement = (birthYeah, firstName) => {                   //here birthYear and firstName are the arguments passed to the yearsUntilRetirement function
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
