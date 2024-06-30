"use strict";
/*  Dinner Guests: Use one of your programs from
Exercises 14 through 18 to print a message indicating
the number of people you are inviting to dinner. */
Object.defineProperty(exports, "__esModule", { value: true });
let my_friend = ["Fatima", "Sana", "Aiman", "Zara"];
console.log(`I am inviting ${my_friend.length} people to dinner, which are following:`);
for (let i = 0; i < my_friend.length; i++) {
    console.log(my_friend[i]);
}
