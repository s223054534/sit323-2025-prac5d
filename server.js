// Import express module
const express = require('express');

// Creating an express application
const app = express();

// Defining a port for the server
const port = 3000;

// Defining a route to respond with 'Hello World'
app.get('/', (req, res) => {
    res.send('Hello World! Its Manya!!');
});

// Making the app listen on the specified port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
