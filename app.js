const express = require("express")
const app = express()
const cors = require("cors")
const router = require("./routes")
const PORT = 9000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// router middleware 
router(app)


/**
 * @openapi
 * /users/all:
 *   get:
 *     description: Get all users !
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

app.listen(PORT, () => console.log("I am live at " + 9000))