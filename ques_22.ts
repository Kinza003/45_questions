/* Intentional Error: Try to produce an array index error in one of your programs. 
Correct the error before finishing. */


let games : string[] = ["Circket", "Football", "Hockey", "Tennis"];

// producing error by accessing invalid index of array
console.log(games[4]);

// Arrays are zero-indexed, so index 4 is out of bound

console.log(games[1]);  // correcting the error by accessing corrct index