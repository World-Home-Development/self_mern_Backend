const mongoose = require("mongoose")

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/forstate")
        console.log(`MongoDB Has Been Connected with ${conn.connection.host}`)
    } catch (error) {
        
    }
}

module.exports = connectDB