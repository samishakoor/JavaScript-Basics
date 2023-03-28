// Dot vs. Bracket Notation    (bracket notaion is more flexible than Dot notaion (as dot notation restricts us most of time))
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };
  
console.log(jonas);
console.log(jonas.length)          // displays undefined because we cannot calculate the length of an object 
console.log(jonas.friends.length)   // displays the length an array which is present in object as a property
  

  // dot notation to access the property of an object
  console.log(jonas.lastName);                      //displays the second property(actually the value in front of second property) of object 'jonas' 
  console.log(jonas.occupation);                    // displays undefined because occupation property is not present in object 'jonas'
  // bracket notation to access the property of an object 
  console.log(jonas['lastName']);                   // this will aslo display the second property(actually the value in front of second property) of object 'jonas' 
  
  // other ways of accessing the values of property (in front of property)
  const nameKey = 'Name';           
  console.log(jonas['first' + nameKey]);           // accessing the value of first property of object 'jonas'
  console.log(jonas['last' + nameKey]);            // accessing the value of 2nd property of object 'jonas'
  //console.log(jonas.'last' + nameKey)          // this will give an error because above method works only with bracket notation, not with dot natation 
  
// we can only use dot notation with real property names  like jonas.job ,jonas.age etc


// prompt is a built-in function in javaScript and it  receives the input from user when we open the website and returns that inputted data so that we can store that inputted data in a variable  
  const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
  console.log(jonas.interestedIn)        //(lets suppose we enter 'job' as the input when prompt occurs) this will display undefined because dot notation works only with real names and interestedIn is not a real property name (doesn't matter interestedIn is containing 'job' after the input)  but the same situation will work with bracket notation

  if (jonas[interestedIn]) {                 // jonas.interestedIn don't work but jonas[interestedIn] will work (we are supposing that we write/enter 'job' as an input when the prompt occur os that the variable interestedIn in now storing 'job' string) 
    console.log(jonas[interestedIn]);
  } else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
  }


  // object is a primitive data type so we can mutate/update an object (no matter 'const' keyword is used with object name or not) 
   
  jonas.location = 'Portugal';           //adding a key(property)-value pair to jonas object (here location is a property and 'Portgal' is its corressponding value)  
  jonas['twitter'] = '@jonasschmedtman';      // adding a property named 'twitter' whose value is '@jonasschmedtman' in jonas object
  console.log(jonas);                    // displays the newly updated jonas object (after adding two more properties)
  
  // Challenge
  // "Jonas has 3 friends, and his best friend is called Michael"
  console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
  