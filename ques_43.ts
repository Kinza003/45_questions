/* Start with your work from Question / Exercise 42. 
Call the function make_great() with a copy of the array of
magician's names. Because the original array will be unchanged, 
return the new array and store it in a separate array. Call 
show_magicians() with each array to show that you have one array 
of the original names and one array with the great added to each 
magician's name. */


let magician_names: string[] = ["Alice", "Kim", "Chris"];

function show_magicians(magician_names: string[]) {
  magician_names.forEach((magician_name) => {
    console.log(magician_name);
  });
}

function make_great(name: string[]) {
  for (let i = 0; i < magician_names.length; i++) {
    console.log(`The Great ${magician_names[i]}`);
  }
}

let copy_magician_names = magician_names.slice();

console.log("\nOriginal Array\n");
show_magicians(magician_names);

console.log("\nCopied Array\n");
show_magicians(copy_magician_names);




