"use strict";
/* Make an array of magician's name. Pass the array to a
function called show_magicians(), which prints the name of
each magician in an array. */
Object.defineProperty(exports, "__esModule", { value: true });
let magician_names = ["Alice", "Kim", "Chris"];
function show_magicians(magician_names) {
    magician_names.forEach((magician_name) => {
        console.log(magician_name);
    });
}
show_magicians(magician_names);
