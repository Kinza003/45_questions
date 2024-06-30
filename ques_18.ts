/* Seeing the World: Think of at least five places 
   you’d like to visit.
· Store the locations in an array. Make sure the 
  array is not in alphabetical order.
· Print your array in its original order.
· Print your array in alphabetical order without 
  modifying the actual list.
· Show that your array is still in its original order 
  by printing it.
· Print your array in reverse alphabetical order without 
  changing the order of original list.
· Show that yoyr array is still in its original order by 
  printing it again.
· Reverse the order of your list. Print the array to show that 
  its order has changed.
· Reverse the order of your list again. Print the list to show 
  it's back to its original order.
· Sort your array so it's stored in alphabetical order. Print the 
  array to show that its order has been changed.
· Sort to change your array so it's stored in reverse alphabetical order. 
  Print the list to show that its order has changed. */


let places : string[] = ["Kashmir", "Egypt", "Switzerland", "Saudia Arabia", "Dubai"];
console.log("Original order:", places, "\n");

console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places, "\n");

console.log("Reversed alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places, "\n");

places.reverse();
console.log(places, "\n");

places.reverse();
console.log("Original order:", places, "\n");

places.sort();
console.log("Alphabetical order:", places, "\n");

places.sort();
console.log("Reversed alphabetical order:", places, "\n");