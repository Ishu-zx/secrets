const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const MONGO_URL = process.env.MONGO_URL
const connectDB = ()=>{
    mongoose.connect(MONGO_URL)
    .then(()=>{
        console.log('MongoDb connected!!')
    })
}

module.exports = connectDB