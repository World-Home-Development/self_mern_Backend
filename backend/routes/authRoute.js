const express = require("express")
const router = express.Router()
const {adduser} = require("../controller/authController")

router.post("/adduser/", adduser)

module.exports = router