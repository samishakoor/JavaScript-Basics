
// Function Declarations vs. Expressions

// Function declaration
  function calcAge1(birthYeah) {
    return 2037 - birthYeah;
  }
  const age1 = calcAge1(1991);
  
  // Function expression  (a function expression produce/return a value but its not a must condition)
  const calcAge2 = function (birthYeah) {                           // we can say a function expression as an anonymous fuction
    return 2037 - birthYeah;                     // the returned value is stored in calcAge2 variable 
  }
  const age2 = calcAge2(1991);                 // age2 variable is the variable to store the returned output
  console.log(age1, age2);


  const calcAge3 = function () {                           // we can say a function expression as an anonymous fuction
    console.log(2022-2003);                     // the returned value is stored in calcAge2 variable 
  }

  const age3 = calcAge3();                  //calcAge3() did not return a value so age3 variable is undefined
  console.log(age3)                         // display undefined
  
  calcAge3();                        

/*
The main difference between the function declaration and function expression is:  In function declaration, we can
call a function before the definition of that function like

const age1 = calcAge1(1991);

function calcAge1(birthYeah) {
    return 2037 - birthYeah;
  }

  
But,in Function Expression, we cannot call a function before its definition (it will give an error if we do so)   
 
const age2 = calcAge2(1991);  

  const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
  }

if we do the above, error will generated (so we always have to call a function expression after the definition of that function)  
*/







