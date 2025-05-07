const express = require('express')

/**
 * Config
 */
const port = 3000

/**
 * App
 */
const app = express()

/**
 * Routes
 */
app.get('/', (req, res) => res.json({message: 'Hi!'}))

/**
 * Server
 */
app.listen(port, () => console.log('Listening on port:' + port))