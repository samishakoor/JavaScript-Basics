// Looping Arrays, Breaking and Continuing
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];
  const types = [];            // creating an empty array
  
  for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
  
    // one way of Filling 'types' array
    // types[i] = typeof jonas[i];
    
    //another alternative way of Filling 'types' array
    types.push(typeof jonas[i]);
  }
  
  console.log(types);
  
  const years = [1991, 2007, 1969, 2020];
  const ages = [];                               // creating an empty array
  
  for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
  }
  console.log(ages);


  // continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;                        //break should only be used in a loop (for loop. while loop etc)

  console.log(jonas[i], typeof jonas[i]);
}


