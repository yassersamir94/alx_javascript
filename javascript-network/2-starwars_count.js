// File: 2-starwars_count.js
const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;
let count = 0; // Define count variable once

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  
  const films = JSON.parse(body).results;
  count = films.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)).length; // Update count variable
  console.log(count);
});
