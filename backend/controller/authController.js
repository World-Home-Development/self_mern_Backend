const User = require("../models/authModel")
const adduser = async(req, res)=>{
    const userData = req.body
    const user = await User.create(userData)
    res.status(200).json({
        user
    })
}

const getUser = async(req, res)=>{
    const user = await User.find()
    res.status(200).json(user)
}

module.exports = {adduser, getUser}