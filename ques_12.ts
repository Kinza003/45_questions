/* Greetings: Use the array from Exercise 11. 
Instead of just printing each person’s name, 
print a message to them. The message should 
be the same for each person, but personalized with 
their name. */

let friend1: string[] = ["Sana", "Khushboo", "Laiba", "Hourain"];
let arraymessage1:string=(" Can you call me later? Because i am busy now.");

// By printing each element separately.
console.log(friend1[0]+arraymessage1, '\n');
console.log(friend1[1]+arraymessage1, '\n');
console.log(friend1[2]+arraymessage1, '\n');
console.log(friend1[3]+arraymessage1);
console.log("\n");


// By using for loop.

//  METHOD 1
let friend2: string[] = ["Sana", "Khushboo", "Laiba", "Hourain"];
for (let friend of friend2) {
  console.log(`${friend}, Can you call me later? Because i am busy now.`, "\n");
}

// METHOD 2
for (let i = 0; i < friend2.length; i++) {
  console.log(
    `${friend2[i]}, Can you call me later? Because i am busy now.`,
    "\n"
  );
}