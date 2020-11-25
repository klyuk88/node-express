const mongoose = require('mongoose')


const linkSchema = new mongoose.Schema({
    code: String,
    sourse: String,
    short: String,
    date: {
        type: String,
        default: Date.now
    }

})


module.exports = mongoose.model('Link', linkSchema)