const { Sequelize } = require('sequelize');
const dbConfig = require("../config/dbConfig")
const userModel = require("./user")

const sequelize = new Sequelize(dbConfig.DB_NAME, dbConfig.USERNAME, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DBMS
})

sequelize.authenticate()
.then(() => {
    console.log("Database connected successfully !")
})
.catch((error) => {
    console.log(error)
})

let db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

db.users = userModel(sequelize)

module.exports = db