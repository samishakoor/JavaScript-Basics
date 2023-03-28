// let, const and var

/*
1. let is used when we want to only declare the variable (not to initialize)
2. let is used when we want to mutate(change/update) the variable or
int the other words, we can use let when we want to re-initialize the 
variable later on. For example,

                   let name="sami"
                   console.log(1)
                   console.log(5)
                   name="haseed"              // now we are mutating the variable 'name' because previously it was initialized with sami but now it is initialized with haseeb  
*/

let age = 30;
age = 31;

/*
1. when we use const with a variable, then that variable will become mutable immutable(cannot be re-initialized)
2. we cannot create an empty variable (un-initialized) using const

*/

const birthYear = 1991;
// birthYear = 1990;              //gives an error because birthYear cannot be re-initialized
// const job;                     // gives an error because job is un-initialixed


/*
var is similar to let but using var is an older fashion
*/

var job = 'programmer';
job = 'teacher'
console.log(job)



/*
Another difference between var and let/const is that the variables declared with var will create
a property on global window object (or in other words, when a variable is declared as a 'var'
type variable then this variable is also present in window object and can be accessed from window when needed)

Remember :  window is the global object of javaScript in the browser
 
*/

console.log(window.job);         // since job is a var type variable so it can also be accessed from the window object


lastName = 'Schmedtmann';               // we can also use a variable without using let,const and var but it is not a safe method
console.log(lastName);                        