const express = require("express")
const router = express.Router()
const {adduser, getUser, loginUser} = require("../controller/authController")

router.post("/adduser/", adduser)
router.post("/loginuser/", loginUser)
router.get("/getuser/", getUser)

module.exports = router