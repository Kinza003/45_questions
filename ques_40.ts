/* Write a function called make_album that builds on object 
describing a music album. The function should take in an artist 
name and an album title, and It should return an object 
containing these two pieces of information. Use the function 
to make three dictionaries representing different albums. 
Print each return value to show that each objects are storing 
the album information correctly.
Add an optional parameter to make_album that allows you to 
store the number of track so in an album. If the calling line 
includes a value for the number of tracks, add that value
to the album's object. Make at least one new function call that
includes the number of tracks on an album. */

function make_album(
  artist_name: string,
  album_title: string,
  tracks?: number
): any {
  let album: {
    artist: string;
    title: string;
    tracks?: number;
  } = {
    artist: artist_name,
    title: album_title,
  };
  if (tracks != undefined) {
    album.tracks = tracks;
  }
  return album;
}

let album1 = make_album("Artist One", "The First Album");
console.log(album1);
let album2 = make_album("Artist Two", "The Second Album", 2);
console.log(album2);
let album3 = make_album("Artist One", "The Third Album");
console.log(album3);
