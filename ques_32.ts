/* Do the following to create a program that stimulates 
how websites ensure that everyone has a unique username.
· Make a list of 5 or more usernames called current_user.
· Make another list of 5 usernames calles new_users. Make
  sure one or two of the new usernames are also in the current_users list.
· Loop through the new_user list to see if each new username has 
  already been used. If it has, print the message that the person will need 
  to enter a new username. If a username has not been used, print the message 
  saying that the username is available. 
· Make sure your comparison is case insensitive. If 'John' has been used 'JOHN' 
  could not be accepted. */

let current_users: string[] = ["Laiba", "Kinza", "Hamnah", "Hania", "Ramlah"];
let new_users: string[] = ["Anzish", "Musfira", "Kinza", "Laiba", "Sadaf"];

new_users.forEach((new_user) => {
  if (
    current_users.some(
      (current_user) => current_user.toLowerCase() === new_user.toLowerCase()
    )
  ) {
    console.log(
      `${new_user} needs to choose a new username because it has already taken.`
    );
  } else {
    console.log(`${new_user} is available.`);
  }
});
