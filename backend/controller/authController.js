const User = require("../models/authModel")
const adduser = async(req, res)=>{
    const userData = req.body
    const user = await User.create(userData)
    res.status(200).json({
        user
    })
}

module.exports = {adduser}