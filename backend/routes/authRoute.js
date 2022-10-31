const express = require("express")
const router = express.Router()
const {adduser, getUser} = require("../controller/authController")

router.post("/adduser/", adduser)
router.get("/getuser/", getUser)

module.exports = router