// Introduction to Arrays  (arrays can hold as many values as we want and also values of any type (any data type) that we would like)
// Array is a primitive datatype (can be mutable(updated))
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];       // this syntax to declare an array is called literal syntax
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);           // a new ways of declaring an array
//remember that arrays always starts from 0th index (i-e, the first element/value of an array is always present at 0th index)
console.log(friends[0]);          // display the first element/value of friends array  (actually we are accessing/retrieving a particular element of an array through its index)
console.log(friends[2]);          // displays the 3rd value of friends array

console.log(friends.length);       // displays the no of values/elements present in the friends array 
console.log(friends[friends.length - 1]);   // displays the last element of friends array (remember, the last element of an array is always present at (n - 1)th index where n is the length of array)
// we can update or retrieve/access a particular element of an array using the index of that particular element 
friends[2] = 'Jay';            // updating an array (actually a particular value/element of that array using index of that value/element) , for example , in this case, we are updating/changing a value/element present at 2nd index(3rd element) of array.
/* in above line of code "friends" array is a constant array (as we used 'const' while declaring 'friends' array) but still
we are updating the element/value of friends array (knowing that, that array is constant),  THE ONLY REASON WE CAN DO THIS
IS BEACUSE "ARRAY" IS A PRIMITIVE DATA TYPE AND PRIMITIVE DATATYPES CAN BE MUTABLE/UPDATED (regardless of that they are declared as constant before) 
*/
console.log(friends);            // displays the updated/mutated friends array
// friends = ['Bob', 'Alice']             // the entire array cannot be updated at once (only a certain value/element can be updated using its index)


// array can store different type (data type) of values/elements    (remember , an array can also store another array as its element/value)
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];    // here we can see an array named 'jonas' is storing/containing another array named 'friends' as its last element  
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years))                  //displays NaN because an array cannot be subtracted from a number


const age1 = calcAge(years[0]);          // here the first element of array(which is a number) is passed as a parameter  to calcAge function
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);


// we can call a function inside an array (as an element of array) but that function must return a value so that it can be stored as value/element of that array
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];  
console.log(ages);



