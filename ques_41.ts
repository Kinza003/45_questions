/* Make an array of magician's name. Pass the array to a 
function called show_magicians(), which prints the name of 
each magician in an array. */

let magician_names: string[] = ["Alice", "Kim", "Chris"];

function show_magicians(magician_names: string[]) {
  magician_names.forEach((magician_name) => {
    console.log(magician_name);
  });
}
show_magicians(magician_names);
