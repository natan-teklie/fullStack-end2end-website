const express =require("express")
const {signUp} =require("../controller/authController")
const Router = express.Router()

Router.route("/signup").post(signUp)

module.exports =Router; 