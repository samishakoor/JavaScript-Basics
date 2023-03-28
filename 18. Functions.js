// arguments are the actual values passed to a function during calling a function  while parameters makes a copy of these arguments in the prototype/definition of a function  


// Functions   ( we can call a function as many times we want)
function logger() {                         // here function is a reserved keyword and logger is name of function
    console.log('My name is Jonas');
  }
  
  // calling / running / invoking function
  logger();
  logger();
  logger();
  
  // apples and oranges are the parameters(not arguments) passed to function fruitProcessor
  function fruitProcessor(apples, oranges) {                                //here apples and oranges are the arguments passed to a fruitProcessor function
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;                      // a function can return a value using return keyword
  } 
  
  // 5 and 0 are the arguments not parametrs
  const appleJuice = fruitProcessor(5, 0);                // 5 and 0 are the arguments passed to fruitProcessor function and appleJice variable is storing the returned value from fruitProcessor function
  console.log(appleJuice);
  
  const appleOrangeJuice = fruitProcessor(2, 4);    //appleOrangeJuice is the variable to store the returned output
  console.log(appleOrangeJuice);
  


/*
    the 'return' keyword immediately leaves the function and return that specific value
    to that from where function is called (if some code is written below that line where return
    is present, then that code will not be executed because return statement terminates the execution
    of function)
*/    