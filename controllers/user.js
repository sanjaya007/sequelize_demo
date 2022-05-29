const db = require("../models")

const UserModel = db.users

const addUser = async (req, res) => {
    try {
        const body = req.body
        const newUser = await UserModel.create(body)
        res.json({ 
            status: "success",
            message: "Registeration Successfull", 
            data: newUser
        })
    } catch (error) {
        console.log(error)
    }
}

const getUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.findAll({})
        res.json({allUsers})
    } catch (error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {addUser, getUsers, loginUser}