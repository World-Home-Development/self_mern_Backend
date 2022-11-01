const User = require("../models/authModel")
const adduser = async(req, res)=>{
    const userData = req.body
    const user = await User.create(userData)
    res.status(200).json({
        user
    })
}

const loginUser = async(req, res)=>{
    const {email, password} = req.body
    const user = await User.findOne(email)
    if(user && user.password === password){
        res.status(200).json({
            user
        })    
    }else{
        req.status(500).json({
            message:"Invailid Credentials1..."
        })
    }
}

const getUser = async(req, res)=>{
    const user = await User.find()
    res.status(200).json(user)
}

module.exports = {adduser, getUser, loginUser}