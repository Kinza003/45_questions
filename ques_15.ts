/* Changing Guest List: One of your guests can't make it to the dinner, 
so you need to send out a new set of invitations with a replacement guest. */

let guests: string[];
guests = ["Fatima ", "Hooria ", "Aiman "];

guests.forEach((guest) => {
  console.log(`Dear ${guest}, would you like me to join for dinner?`);
});

console.log("\n");

let unableToAttend: string = "Aiman";
console.log(
  `${unableToAttend} can't make it to dinner, so I invited Imaan`,
  "\n"
);

console.log("New list of guests coming to dinner");

guests.splice(2, 1, "Imaan");
console.log(guests, "\n");

guests.forEach((guest) => {
  console.log(`Dear {guest}, would you like me to join for dinner?`);
});
