const db = require("../models")

const UserModel = db.users

const addUser = async (req, res) => {
    try {
        const body = req.body
        console.log(body)
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
        const body = req.body;
        const isUserAvailable = await UserModel.findOne({
            where: {
                username: body.username
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        console.log(isUserAvailable)

        if (!isUserAvailable){
            return res.json({
                status: "failed",
                message: "Username or password is incorrect.",
            })
        }

        if (isUserAvailable.password !== body.password){
            return res.json({
                status: "failed",
                message: "Username or password is incorrect.",
            })
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {addUser, getUsers, loginUser}