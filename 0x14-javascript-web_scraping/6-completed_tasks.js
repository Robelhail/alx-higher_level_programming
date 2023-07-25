#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.log('Usage: node 6-completed_tasks.js <API_URL>');
  process.exit(1);
}

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error while fetching data:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Failed to fetch data. Status code:', response.statusCode);
    process.exit(1);
  }

  try {
    const tasks = JSON.parse(body);

    // Filter out completed tasks
    const completedTasks = tasks.filter((task) => task.completed);

    // Count completed tasks for each user
    const completedTasksByUser = completedTasks.reduce((acc, task) => {
      if (acc[task.userId]) {
        acc[task.userId]++;
      } else {
        acc[task.userId] = 1;
      }
      return acc;
    }, {});

    console.log(completedTasksByUser);
  } catch (parseError) {
    console.error('Error while parsing data:', parseError);
    process.exit(1);
  }
});

