const mongoose = require("mongoose")

const connectDB = async()=>{
    try {
        // const conn = await mongoose.connect("mongodb://localhost:27017/forstate")
        const conn = await mongoose.connect("mongodb://arif:admin@54.198.98.139:27017/ForState")
        console.log(`MongoDB Has Been Connected with ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB