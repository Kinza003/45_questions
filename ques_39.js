"use strict";
/* Write a function called city_country() that takes
in the name of a city and its country. The function
should return a string formatted like this:
"Lahore", "Pakistan"
Call your function with at least three city_country pair,
and print the value that's returned. */
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) {
    console.log(`${city}, ${country}`);
}
city_country("Karachi", "Pakistan");
city_country("Makkah", "Saudia Arab");
city_country("Tokyo", "Japan");
