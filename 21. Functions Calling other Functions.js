// Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
  }
  
  function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
  
    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;          // juice is a templete literal(basically a string) and we can return it 
  }
  console.log(typeof fruitProcessor(2, 3));
  console.log(fruitProcessor(2, 3));



