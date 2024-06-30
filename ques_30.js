"use strict";
/* Hello Admin: Make an array of 5 or more usernames,
including the name 'admin'. Imagine you are writig code
that will print a greeting to each user after they log in
to the website. Loop through the array and print a greeting
to each user:
· If the username is admin, print a special greeting, such as:
  "Hello admin, would you like to see a status report?".
· Otherwisw, print a generic greeting, such a: "Hello user,
  Thankyou for logging again". */
Object.defineProperty(exports, "__esModule", { value: true });
let usernames = ["Admin", "user1", "user2", "user3", "user4"];
usernames.forEach((username) => {
    if (username == "Admin") {
        console.log(`Hello ${username}, would you like to see a status report?`, "\n");
    }
    else {
        console.log(`Hello ${username}, thankyou for logging in`);
    }
});
