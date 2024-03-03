// 2-starwars_count.js
const request = require('request');

const apiUrl = process.argv[2];
const wedgeAntillesUrl = 'https://swapi-api.alx-tools.com/api/people/18/';

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  const films = JSON.parse(body).results;
  let count = 0;

  // Loop through each film
  films.forEach(film => {
    // Check if Wedge Antilles URL is included in the characters array
    if (film.characters.includes(wedgeAntillesUrl)) {
      count++;
    }
  });

  console.log(count);
});
