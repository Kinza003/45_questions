"use strict";
/*Shrinking Guest List: Unfortunately, your new table
won’t arrive in time, and you can only invite two guests. */
Object.defineProperty(exports, "__esModule", { value: true });
let guests = [
    "Laiba",
    "Fatima",
    "Kinza",
    "Hooria",
    "Imaan",
    "Hamnah",
];
console.log("Unfortunetaly! I can't arrange bigger table for dinner, so I could invite just two guests", "\n");
for (let i = 2; i <= 5; i++) {
    console.log(`Sorry ${guests[i]}, you are not invited due to some reason`);
}
console.log("\n");
console.log("New list of guests");
console.log(guests, "\n");
for (let i = 0; i <= 1; i++) {
    console.log(`${guests[i]} you are still invited`);
}
