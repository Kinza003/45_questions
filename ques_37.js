"use strict";
/* Modify the make_shirt() function so that shirts are
large by default, with a message that reads I love Typescript.
Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message. */
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "large", message = "I love Typescript") {
    console.log(`Making a ${size} size shirt with the message ${message} printed on it.`);
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "dive into coding");
