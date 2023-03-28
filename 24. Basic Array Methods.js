// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

                               // Add elements
//push method adds/appends the passed argument(element/value) to the end of array(at the last index of array)  and returns the length of the newly updated array (after pushing the particular element in array)
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

//unshift method adds the passed argument(element/value) to the beginning of the array (at the 0th index of array) and returns the length of newly updated array (after adding element to the first index of array)
friends.unshift('John');
console.log(friends);

                                // Remove elements
//pop method (do not receive any argument) removes the last value/element of array (element present at the last index) and returns the popped element (ofcourse the last element of array)
friends.pop(); 
const popped = friends.pop();
console.log(popped);
console.log(friends);

//shift method (do not receive any argument) removes the very first value/element of array (element present at the 0th index) and returns the popped element (ofcourse the first element of array) 
friends.shift(); 
console.log(friends);


                                  // other Methods

// indexOf method returns the index of that particular element/value of array which is passed as an argument to that indexOf method but if that specific element/value(which we passed as an argument) is not present in that array then -1 is returned
console.log(friends.indexOf('Steven'));        
console.log(friends.indexOf('Bob'));        // displays -1 because Bob is not present in friends array

// includes method returns ture or false depending on the particular element(which is passed as an argument to includes method) is present in the array or not
console.log(friends.includes('Steven'));     // displays true because Steven is present in 'friends' array 
console.log(friends.includes('Bob'));         // displays false because Bob is not present in 'friends' array 
friends.push(23);         //adding 23 (as a value/element) to end of array
console.log(friends.includes(23));        //returns true  because 23 (an integer) is present in 'friends' array 
console.log(friends.includes('23'));      //returns false because 23 (a string) is not present in 'friends' array (23 in frinds array is a number not a string) 


if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}


// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/


const calcTip = function (bill) {
  const b= bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return b
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
