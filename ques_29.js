"use strict";
/* Favourite Fruit: Create an array for your favourite fruits
and check if certain fruits are included by if-else statement. */
Object.defineProperty(exports, "__esModule", { value: true });
let favourite_fruit = [
    "Mango",
    "Apple",
    "Appricot",
    "Orange",
    "Cherry",
];
if (favourite_fruit.includes("Mango")) {
    console.log("I really like Mango");
}
else if (favourite_fruit.includes("Apple")) {
    console.log("I really like Apple");
}
else if (favourite_fruit.includes("Appricot")) {
    console.log("I really like Appricot");
}
else if (favourite_fruit.includes("Orange")) {
    console.log("I really like Orange");
}
else if (favourite_fruit.includes("Cherry")) {
    console.log("I really like Cherry");
}
else {
    console.log("I don't really like it");
}
