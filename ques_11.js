"use strict";
/* Names: Store the names of a few of your friends in
an array called names. Print each person’s name by accessing
each element in the list, one at a time. */
Object.defineProperty(exports, "__esModule", { value: true });
let friend1 = ["Sana ", "Khushboo ", "Laiba ", "Hourain "];
// By printing each element separately.
console.log(friend1[0]);
console.log(friend1[1]);
console.log(friend1[2]);
console.log(friend1[3]);
console.log('\n');
// By using for loop.
let friend2 = ["Sana ", "Khushboo ", "Laiba ", "Hourain "];
for (let i = 0; i < friend2.length; i++) {
    console.log(friend2[i]);
}
