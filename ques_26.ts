/* Alien Color #2: Choose a color for an alien, 
then write an if-else chain. 
· If the alien' color is green, print a statement 
  that the player just earned 5 points for shooting the alien. 
· If the alien's color isn't green print a statement that the 
  player just earned 10 points.
· Write one version of this program that runs the if block and 
  another that runs the else block. */


let alien_color: string = "green";

if (alien_color === "green") {
  console.log("you have earned just 5 points.");
} else {
   console.log("Congragulations! you have earned 10 points.");
}

if (alien_color === "yellow") {
    console.log("you have earned just 5 points.");
  } else {
     console.log("Congragulations! you have earned 10 points.");
  }