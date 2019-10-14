const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//middlewares
// app.use('/posts', () => {
//   console.log("middleware running");
// });
const postsRoute = require('./routes/posts');
//importing routers

app.use('/posts', postsRoute);
//first parameter sets the route, second sets what will load.

//Routes
app.get('/', (req, res) => {
    res.send("We are on home");
});
//along with get, we still have POST, DELETE, PATCH(updating).



//just to test github

// connecting to the DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => {
        console.log("connected to the MongoDB");
    });


//how do we start listening to the server
app.listen(3000);
