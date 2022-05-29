const db = require("./models");

db.sequelize.sync({ force: true })
.then(() => console.log("Re-sync table completed !!"))
.catch((error) => console.log(error))