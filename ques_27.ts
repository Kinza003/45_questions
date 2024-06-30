/* Alien Color #3: Convert your if-else chain 
to handle three colors: green, yellow, red. */

let alien_color: string = "green";

if (alien_color === "green") {
  console.log("you have earned just 5 points.");
} else if (alien_color === "yellow") {
  console.log("Congragulations! you have earned 10 points.");
} else if (alien_color === "red") {
  console.log("Opps! you lose");
} else {
  console.log("invalid color");
}
