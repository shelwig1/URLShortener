const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    fullURL: {
        type: String,
        required: true
    },
    shortURL: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('ShortURL', urlSchema)