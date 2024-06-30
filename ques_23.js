"use strict";
/* Conditional Tests: Write a series of conditional tests.
Predict the results of each test.
· Create at least 10 tests. Have at least 5 tests evaluate
  to True and another 5 tests evalute to False, */
Object.defineProperty(exports, "__esModule", { value: true });
// --------------------- 5 true statements --------------------
let runs = 50;
let over = 4;
// Test 1
console.log("Test 1 : runs is equal to 50");
console.log(runs == 50, "\n");
// Test 2
console.log("Test 2 : over is equal to 4");
console.log(over == 4, "\n");
// Test 3
console.log("Test 3 : runs is greater than 35");
console.log(runs > 35, "\n");
// Test 4
console.log("Test 4 : over is less than 10");
console.log(over < 10, "\n");
// Test 5
console.log("Test 5 : runs is not equal to over");
console.log(runs !== over, "\n");
console.log("\n");
// --------------------- 5 false statements --------------------
let fruit1 = "Apple";
let fruit2 = "Mango";
// Test 6
console.log("Test 6 : fruit1 is equal to apple");
console.log(fruit1 == "apple", "\n");
// Test 7
console.log("Test 7 : fruit2 is equal to Banana");
console.log(fruit2 == "Banana", "\n");
// Test 8
console.log("Test 8 : fruit1's length is equal to 7");
console.log(fruit1.length == 7, "\n");
// Test 9
console.log("Test 9 : fruit1 is equal to fruit2");
console.log(fruit1 == fruit2, "\n");
// Test 10
console.log("Test 10 : fruit1 is equal to APPLE");
console.log(fruit1 == fruit1.toUpperCase());
