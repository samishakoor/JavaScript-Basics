// Truthy and Falsy Values

// There are 5 falsy values: 0, '' (empty string) , undefined, null, NaN              
// these falsy values returns false 
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));             //returns true because it is not an empty string
console.log(Boolean({}));                  //returns true becuse {} does not comes under the 5 falsy values
console.log(Boolean(''));

const money = 100;
if (money)        // since money=100 so it is  a truthy value , so it will retun true and if condition will run 
{
  console.log("Don't spend it all ;)");
} 
else
{
  console.log('You should get a job!');
}

let height = 0;
if (height)     // since heigth is 0 and 0 is a falsy value , so it will retun false and if condition will not run 
{
  console.log('YAY! Height is defined');
}
 else
{
  console.log('Height is UNDEFINED');
}

let name = '';   
if (name)     // since name is empty string and is a falsy value , so it will retun false and if condition will not run 
{
  console.log('name is not empty');
}
 else
{
  console.log('name is empty');
}



let name2 = undefined;   
if (name2)     // since name is undefined and is a falsy value , so it will retun false and if condition will not run 
{
  console.log('name2 is not undefined');
}
 else
{
  console.log('name2 is undefines');
}


let name3 ;    // since variable name3 is only declared (not initialized) so type of name3 is 'undefined' which is a falsy value
console.log(name3);   
if (name3)     // since name is undefined and is a falsy value , so it will retun false and if condition will not run 
{
  console.log('name3 is defined');
}
 else
{
  console.log('name3 is not defined');
}









