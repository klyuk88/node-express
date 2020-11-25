const mongoose = require('mongoose')

const uri = "mongodb+srv://url-min:IQYkWAwp5rrN4s0C@cluster0.rapzz.mongodb.net/url-min?retryWrites=true&w=majority"
const connectDb = () => mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true})

module.exports = connectDb