const mongoose = require('mongoose');

const FishSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        },
    image: {
        type: String,
        required: true,
        },
    description: {
        type: String,
        required: true,
        },
},{timestamps: true});

const Fish = mongoose.model('Fish', FishSchema)

module.exports = Fish