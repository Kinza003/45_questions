/* More Conditional Tests: Expand your conditional 
tests to cover a wider range of comparisons.
Have at least one true and one false result for
each of the following.
· Test for equality and inequality in strings.
· Test using the lower case function.
· Numerical test using equality and in equality, 
  greater than and less than, greater than and equal to, 
  and less than or equal to.
· Test using "and" and "or" operator.
· Test whether an item is in an array.
· Test whether an item is not in an array.*/


//     ----------- Test for equality and inequality in strings ---------

let Apple : string = "apple";

// Test for equality
console.log("Apple is equal to apple");
console.log(Apple == "apple", "\n");              // true

// Test for inequality
console.log("Apple is  equal to Apple");
console.log(Apple == "Apple", "\n");              // false


//    --------------- Test using the lower case function ------------

let name : string = "KINZA";

// Test for equality
console.log("name is equal to kinza after converting to lowercase");
console.log(name.toLowerCase() == "kinza", "\n");              // true

 // Test for inequality
console.log("name is equal to KINZA after converting to lowercase");
console.log(name.toLowerCase() == "KINZA", "\n");              // false


//   ----------- Numerical test using equality and in equality, 
//               greater than and less than, greater than and 
//               equal to, and less than or equal to  -----------------

let num1 : number = 10;
let num2 : number = 20;


// Test for equality
console.log("num1 is equal to 10");
console.log(num1 == 10, "\n");                // true

// Test for inequality
console.log("num2 is equal to 30");
console.log(num2 == 30, "\n");                // false

// Greater Than
console.log("num1 is greater than 7");
console.log(num1 > 7, "\n");                // true

// Less Than
console.log("num2 is less than 25");
console.log(num2 < 25, "\n");                // true

// Greater Than And Equal To
console.log("num1 is greater than and equal to  7");                // true
console.log(num1 >= 7, "\n");

// Less Than And Equal To
console.log("num2 is less than and equal to  25");
console.log(num2 <= 25, "\n");                // true




//   --------------- Test using "and" and "or" operator --------------------

let pen : number = 5;
let marker : number = 2;

// Using && (and) Operator
console.log("pen is greater than 5 and marker is equal to 5");
console.log(pen > 5 && marker == 5, "\n");           // false

console.log("marker is equal to 2 and pen is less than 7");
console.log(marker == 2 && pen < 7, "\n");          // true

// Using || (or) Operator
console.log("pen is greater than 5 or marker is less than and equal to 3");
console.log(pen > 5 || marker <= 3, "\n");          // true

console.log("marker is not equal to 2 or pen is less than 7");
console.log(marker !== 2 || pen >= 7, "\n");          // false


//     --------------- Test whether an item is in an array ------------------

let stationary : string[] = ["Pencil", "Pen", "Marker", "Eraser"];


console.log("Marker exist in array (stationary)");
console.log(stationary.includes("Marker"), "\n");          // true

//     --------------- Test whether an item is not in an array ------------------
       
console.log("Book exist in array (stationary)");
console.log(stationary.includes("Book"), "\n");          // false