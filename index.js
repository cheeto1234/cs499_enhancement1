// File to create a local server using express (required for the program to work properly)

const express = require('express')
const app = express()
const port = 5500

app.use(express.static(__dirname + '/app')); // Routing to app folder

app.listen(port, () => console.log('Server started on http://127.0.0.1:'+port)) // Start local server on specified port