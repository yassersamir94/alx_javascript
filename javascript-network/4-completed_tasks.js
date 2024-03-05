// File: 4-completed_tasks.js
const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const todos = JSON.parse(body);

  // Initialize an object to store the count of completed tasks for each user
  const completedTasksCount = {};

  // Loop through the todos to count completed tasks for each user
  todos.forEach(todo => {
    if (todo.completed) {
      if (!completedTasksCount[todo.userId]) {
        completedTasksCount[todo.userId] = 1;
      } else {
        completedTasksCount[todo.userId]++;
      }
    }
  });

  console.log(completedTasksCount);
});
