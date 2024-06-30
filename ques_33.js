"use strict";
/* Ordinal number indicate their position in an array,
such as 1st or 2nd. Most ordinal numbers end in the except 1, 2, 3.
· Store the numbers 1 through 9 in an array.
· Loop through the array.
· Use an if-else chain inside the loop to print the proper ending for
  each number your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th",
  and each result should be on a separate line. */
Object.defineProperty(exports, "__esModule", { value: true });
let my_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < my_num.length; i++) {
    // now we use conditional statements
    if (my_num[i] == 1) {
        console.log(`${my_num[i]}st`);
    }
    else if (my_num[i] == 2) {
        console.log(`${my_num[i]}nd`);
    }
    else if (my_num[i] == 3) {
        console.log(`${my_num[i]}rd`);
    }
    else if (my_num[i] >= 4 && my_num[i] <= 9) {
        console.log(`${my_num[i]}th`);
    }
}
