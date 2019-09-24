const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//middlewares
// app.use('/posts', () => {
//   console.log("middleware running");
// });

//Routes
app.get('/', (req, res) => {
    res.send("We are on home");
});
//along with get, we still have POST, DELETE, PATCH(updating).


app.get('/posts', (req, res) => {
    res.send("We are on posts");
})


// connecting to the DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => {
        console.log("connected to the MongoDB");
    });


//how do we start listening to the server
app.listen(3000);
