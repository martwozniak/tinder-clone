import express from 'express'
import mongoose from 'mongoose'

// App config
const app = express();
const port = process.env.PORT || 8001

// Middlewares


// DB Config


// API Endpoint
app.get('/', (req, res)=> res.status(200).send("Hello World"));

// Listeners
app.listen(port, () => console.log(`listening on localhost: ${port}`));