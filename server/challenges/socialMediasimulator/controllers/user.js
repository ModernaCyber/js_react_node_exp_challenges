const { json } = require("express")
const  User  = require("../models/user")
const { writeLine } = require("../utils/userUtils")

const path = require("path")

const filePath = path.join(__dirname,'../data/user.txt')

const handleLoginController = async( req, res) => {
    res.send('Welcome logged in')
}
const handleSignUpController = async( req, res) => {
    const { username, fullname, password } = req.body;
    

    try {
        const joiningDate = new Date();

        const active = true;

        // console.log(username, fullname,password,joiningDate, active)

        const newUser = new User(username,fullname, password,joiningDate, active);
       
        writeLine(filePath,JSON.stringify( newUser.getUser()))

        res.status(200).send(JSON.stringify(newUser.getUser()))
    } catch (error) {
        console.log(error.message)
    }


}
const handleLogoutController = async( req, res) => {}
const handleSearchController = async( req, res) => {}
const handleSettingsController = async( req, res) => {}



module.exports = {
    handleLoginController,
    handleSignUpController,
    handleLogoutController,
    handleSearchController,
    handleSettingsController
  };