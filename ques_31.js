"use strict";
/* Add an if test to exercise 30 to make sure
the list of users is not empty.
· If the list is empty print the message "We need to find some users".
· Remove all of the usernames from your array, and make sure the correct message is printed. */
Object.defineProperty(exports, "__esModule", { value: true });
let username = [];
if (username.length == 0) {
    console.log("We need to find some users");
}
else {
    console.log(`Hello ${username}, thankyou for logging in`);
}
