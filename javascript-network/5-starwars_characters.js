// File: 5-starwars_characters.js
const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const movie = JSON.parse(body);
  const characters = movie.characters;

  // Function to fetch character names from URLs
  const fetchCharacterName = (characterUrl) => {
    return new Promise((resolve, reject) => {
      request(characterUrl, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          const character = JSON.parse(body);
          resolve(character.name);
        }
      });
    });
  };

  // Fetch and print character names
  Promise.all(characters.map(fetchCharacterName))
    .then(names => {
      names.forEach(name => console.log(name));
    })
    .catch(error => console.error(error));
});
