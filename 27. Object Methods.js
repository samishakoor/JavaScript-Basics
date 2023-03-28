// Object Methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
  
    // we cannot upadate/change already defined properties using 'this' keyword (we can only access already defined properties using 'this' keyword)

    // we can also add a function(but the function should be function expression , not function declaration) as a property to an object
    calcAge: function () {     
     // console.log(this);                   //displays the whole jonas object which means we can access any property of jonas object using 'this' keyword (but this will only be used inside the object to access that specific property within(inside) that object)           
     // we are adding a new property "age" to jonas object using this.age (but remember this property (age) is only created/added to object if that calcAge function is called (in which 'age' property is present), if that function is not called then age property will not be created 
      this.age = 2037 - this.birthYeah;             //this.birthYear will access that birthYear on line no. 6 (because 'this' keyword is used to access the already created properties of object but remember, this keyword should be used inside the object)
      return this.age;
    },
  

    // adding another function (as a property) to jonas object
    getSummary: function () {
      return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
  };
  


  console.log(jonas);         //at this point 'age' property is not created yet because we don't call the calcAge function (a property of jonas object) yet 
  console.log(jonas.age);      // displays undefined because age property is not created yet

  console.log(jonas.calcAge());                       //accessing the calcAge property (basically a function ) using dot notation
  //console.log(jonas['calcAge']());                    //(alternative way) accessing the calcAge property (basically a function ) using bracket notation

  console.log(jonas.age);                // now the calcAge() function has been called in line no 30 , so the 'age' property is now created and a part of jonas object  
  console.log(jonas);                    // now we can clearly see the age property in jonas object (because calcAge function has been called)
  
  // Challenge
  // "Jonas is a 46-year old teacher, and he has a driver's license"
  console.log(jonas.getSummary());
  
  
  // Coding Challenge #3
  
  /*
  Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
  
  1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
  2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
  3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
  
  TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
  
  GOOD LUCK 😀
  */
  
  
  const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
      this.bmi = this.mass / this.height ** 2;           //creating a new property (bmi) to mark object  (but this bmi property is also created to mark object if that function(calcBMI) is called in which this bmi property is created)
      return this.bmi;
    }
  };
  
  const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
      this.bmi = this.mass / this.height ** 2;          //creating a new property (bmi) to john object (but this bmi property is also created to mark object if that function(calcBMI) is called in which this bmi property is created)
      return this.bmi;
    }
  };
  
  mark.calcBMI();
  john.calcBMI();
  
  console.log(mark.bmi, john.bmi);       // since the calcBMI() of both objects(mark and john) is called in line no. 79 and 80 therefore, 'bmi' property has been created for both objects(mark and john) and now we can access those two bmi properties from their respective objects 
  
  // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
  
  if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
  }
  