const express = require("express")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 5000
const app = express()
const connectDataBase = require("./config/db")

connectDataBase()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/auth/",require("./routes/authRoute.js"))
app.listen(PORT, ()=>{
    console.log(`Server is running on port # ${PORT}`)
})