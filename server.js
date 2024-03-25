require('dotenv').config();

const express = require('express');
const routes = require('./routes/paint');
const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/', routes);

const listener = app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
})

const mongoose = require('mongoose');

//establish connection to database
mongoose.connect(
    process.env.MONGODB_URI,
    server: { 
        socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } 
    }, 
    replset: {
        socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } 
    },
).then((res) => {
    console.log("Database connected");
  }).catch(error => {
     console.log(error);
   });