const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  const todos = JSON.parse(body);
  const completedByUser = {};

  todos.forEach(todo => {
    if (todo.completed) {
      completedByUser[todo.userId] = (completedByUser[todo.userId] || 0) + 1;
    }
  });

  console.log(completedByUser);
});
