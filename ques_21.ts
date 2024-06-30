/* Think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items. */

let my_info: {
  name: string;
  age: number;
  class: string;
} = {
  name: "Kinza",
  age: 16,
  class: "1st year",
};

console.log(
  `My name is ${my_info.name}. I am ${my_info.age} years old and study in ${my_info.class}. `
);
