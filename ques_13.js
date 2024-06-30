"use strict";
/* Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores
several examples. Use your list to print a series of statements
about these items, such as “I would like to own a Honda motorcycle.” */
// By printing each element separately.
Object.defineProperty(exports, "__esModule", { value: true });
let favouritetransports;
favouritetransports = [
    "Honda motorcycle",
    "Tesla car",
    "Civic car",
    "Bianchi bicycle",
];
for (let favouritetransport of favouritetransports) {
    console.log(`I would like to own a ${favouritetransport}`, "\n");
}
