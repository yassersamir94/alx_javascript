// 2-starwars_count.js
const request = require('request');

const apiUrl = process.argv[2];
const wedgeAntillesId = 18;
const wedgeAntillesUrl = `https://swapi-api.alx-tools.com/api/people/${wedgeAntillesId}/`;

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  const films = JSON.parse(body).results;
  let count = 0;

  films.forEach(film => {
    film.characters.forEach(characterUrl => {
      if (characterUrl === wedgeAntillesUrl) {
        count++;
      }
    });
  });

  console.log(count);
});
