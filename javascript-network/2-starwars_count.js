// 2-starwars_count.js
const request = require('request');

const apiUrl = process.argv[2];
const wedgeAntillesId = 18;

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  const films = JSON.parse(body).results;
  const count = films.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${wedgeAntillesId}/`)).length;
  console.log(count);
});
