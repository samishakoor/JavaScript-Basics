// Reviewing Functions
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
  }
  
  const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;
  
    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
      return retirement;            // the 'return' keyword immediately leaves the function and return that specific value to that from where function is called (if some code is written below that line where return is present, then that code will not be executed because return statement terminates the execution of function)
    } else {
      console.log(`${firstName} has already retired 🎉`);
      return -1;
    }
  }
  
  console.log(yearsUntilRetirement(1991, 'Jonas'));
  console.log(yearsUntilRetirement(1950, 'Mike'));
  
  
// Coding Challenge #1
  
  /*
  Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
  Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
  A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
  
  1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
  2. Use the function to calculate the average for both teams
  3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
  4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
  5. Ignore draws this time.
  
  TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
  TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
  
  HINT: To calculate average of 3 values, add them all together and divide by 3
  HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
  
  GOOD LUCK 😀
  */
  
  
  const calcAverage = (a, b, c) => (a + b + c) / 3;
  console.log(calcAverage(3, 4, 5));
  
  // Test 1
  let scoreDolphins = calcAverage(44, 23, 71);
  let scoreKoalas = calcAverage(65, 54, 49);
  console.log(scoreDolphins, scoreKoalas);
  
  const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
      return `Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
      return `Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`;
    } else {
      return `No team wins...`;
    }
  }
  
    console.log(checkWinner(scoreDolphins, scoreKoalas));
    // The alternative magic way to do above is:
    console.log(checkWinner(calcAverage(44, 23, 71),calcAverage(65, 54, 49) ));
  
    

  checkWinner(576, 111);
  
  // Test 2
  scoreDolphins = calcAverage(85, 54, 41);
  scoreKoalas = calcAverage(23, 34, 27);
  console.log(scoreDolphins, scoreKoalas);
  console.log(checkWinner(scoreDolphins, scoreKoalas));
  
  
  