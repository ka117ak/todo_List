const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

let tasks = [];

// API routes
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
    const newTask = req.body;
    // You might want to validate the task data here
    tasks.push(newTask);
    res.json(newTask);
});

// Additional routes for updating and deleting tasks

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});