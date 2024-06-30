/*  More Guests: You've found a bigger dinner table, 
so there's room for more guests. */

let guests: string[] = ["Fatima", "Hooria", "Imaan"];

console.log("Great news! I found a bigger dinner table");

// Adding more guests.
guests.unshift("Laiba");
guests.splice(guests.length / 2, 0, "Kinza");
guests.push("Hamnah");
console.log(guests, "\n");

guests.forEach((guests) => {
  console.log(`Dear ${guests}, would you like me to join for dinner?`);
});
