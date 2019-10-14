const mongoose = require('mongoose');
//setting how our data will look like

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        date: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);
//first paramter defining the name, and then saying which is the 'schema' that is gonnaa use.
//SCHEMA  is just how our data is gonna look like.
