/* Write a function called make_shirt() that accepts the size 
and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the 
shirt and the message printed on it. Call the function. */


function make_shirt (size : string, message : string) {
    return `Making a ${size} size shirt with the message ${message} printed on it.`;
}
console.log(make_shirt("medium", "Coding is life"));
