/* Think of something you could store in an array. 
For example, you could make a list of mountains, 
rivers, countries, cities, languages, or anything 
else you’d like. Write a program that creates a list 
containing these items. */

let programing_languages: string[] = [
  "Typescript",
  "Javascript",
  "Python",
  "C++",
];

// making list of these items

programing_languages.forEach((item) => {
  console.log(item);
});