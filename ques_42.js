"use strict";
/* Start with a copy of your program fron Question / Exercise 41.
Write a function called make_great() that modifies the array of
magicians by adding the phrase the Great to each magician's name.
Call show_magicians() to see that the list has actually been modified. */
Object.defineProperty(exports, "__esModule", { value: true });
let magician_names = ["Alice", "Kim", "Chris"];
function show_magicians(magician_names) {
    magician_names.forEach((magician_name) => {
        console.log(magician_name);
    });
}
function make_great(name) {
    for (let i = 0; i < magician_names.length; i++) {
        console.log(`The Great ${magician_names[i]}`);
    }
}
make_great(magician_names);
