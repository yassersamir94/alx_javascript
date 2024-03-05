// File: 2-starwars_count.js
const request = require('request')
const apiUrl = process.argv[2]
const characterId = 18
let count = 0

request.get(apiUrl, function (error, response, body) {
    if (error) {
        console.error(error.message)
    } else {
        const movieData = JSON.parse(body)
        movieData.results.forEach(function (movie) {
            movie.characters.forEach(function (character) {
                if (character.includes(characterId)) {
                    count += 1
                }
            })
        })
        console.log(count)
    }
})
