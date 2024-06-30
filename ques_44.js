"use strict";
/* Write a function that accepts an array of items
a person wants on a sandwich. The function should
have one parameter that collects as many items as the
function call provides, and it should print a summary
of the sandwich that is being ordered. Call the function
three times, using a different number of arguments each
time. */
Object.defineProperty(exports, "__esModule", { value: true });
function sandwiches(...items) {
    return `I want sandwich of ${items}.`;
}
let collection1 = sandwiches("Chicken", " ", "Cheese", " ", "Mayo");
let collection2 = sandwiches("Vegetables", " ", "Egg", " ", "Mayo");
let collection3 = sandwiches("Ham", " ", "Cheese");
console.log(collection1);
console.log(collection2);
console.log(collection3);
