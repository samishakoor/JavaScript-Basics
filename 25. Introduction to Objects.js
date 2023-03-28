
// Introduction to Objects

// Revision of Arrays        (an array can store multiple values)
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']                  // an containing another array which is possible
  ];
  


// Objects are somehow similar to arrays but Objects contains the key-value pairs (keys in objects are also called properties) 
// Objects are used to group together different variables that really belongs together
// array elements are accessed using the index of that element but in case of objects, the values are accessed using the property not index



// the object 'jonas' is containing all the properties realted to jonas (i-e. firestName,lastName etc)
  const jonas = {                           // this is the Objects literal syntax to create an object
    firstName: 'Jonas',                     //property firstName has value 'Jonas'
    lastName: 'Schmedtmann',                //property lastName has value 'Schmedtmann'  
    age: 2037 - 1991,
    job: 'teacher',                         // property job has value 'teacher'
    friends: ['Michael', 'Peter', 'Steven']             // adding an array as a property to jonas object (remember we can also add a function(fnction expression not declaration) as a property to an object as well)
  };
  

  // we use arrays for more ordered data and objects for more unstructured data

  // in arrays , we access the elements/values of array using index of that specific element/value but in case of objects , we access the elements of objects through their properties instead of index