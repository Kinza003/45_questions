"use strict";
/* Think of at least three kind of your favourite pizza.
Store these pizza names in an array, and then use a for
loop to print the name of each pizza.
· Modify your loop to print a sentence using the name of
  the pizza instead of printing just the name of the pizza.
  For each pizza you should have one line for output containing
  a simple statement like I like pepperoni pizza.
· Add a line at the end of your program, outside for loop,
  that states How much you like pizza. The output should consist
  of three or more lines about the kinds of pizza, you like and
  then an additional sentence, such as I really love pizza!. */
Object.defineProperty(exports, "__esModule", { value: true });
let favourite_pizzas = ["Cheese", "Pepperoni", "vegetarian"];
// just printing the names
for (let i = 0; i < favourite_pizzas.length; i++) {
    console.log(favourite_pizzas[i]);
}
console.log("\n");
// printing names with message
for (let i = 0; i < favourite_pizzas.length; i++) {
    console.log(`I like ${favourite_pizzas[i]}.`);
}
console.log("\n");
console.log(`I really like to eat pizza. Pizza comes in a variety of flavours and topping, 
allowimg individual to customize it to their liking.`);
