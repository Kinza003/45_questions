"use strict";
/* Stages Of life: Determine a person's life
stage with an if-else chain.
· If the person is less than 2 years old, print
  the message that the person is a baby.
·  If the person is at least 2 years old but less than 4, print
  the message that the person is a toddler.
·If the person is at least 4 years old but less than 13, print
  the message that the person is a kid.
·If the person is at least 13 years old but less than 20, print
  the message that the person is a teenager.
·If the person is at least 20 years old but less than 40, print
  the message that the person is a adult.
·If the person is at least 40 years old but less than 65, print
  the message that the person is a adult.
·If the person is at least 65 or older, print
  the message that the person is a elder. */
Object.defineProperty(exports, "__esModule", { value: true });
let age = 65;
if (age >= 0 && age <= 2) {
    console.log("The person is baby");
}
else if (age >= 2 && age <= 4) {
    console.log("The person is toddler");
}
else if (age >= 4 && age < 13) {
    console.log("The person is kid");
}
else if (age >= 13 && age < 20) {
    console.log("The person is teenager");
}
else if (age >= 20 && age < 40) {
    console.log("The person is young");
}
else if (age >= 40 && age < 65) {
    console.log("The person is adult");
}
else if (age >= 65) {
    console.log("The person is elder");
}
else {
    console.log("Enter valid age");
}
