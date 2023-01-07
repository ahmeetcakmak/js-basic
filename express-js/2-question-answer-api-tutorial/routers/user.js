const express =require("express");
const {getSingleUser} = require("../controllers/user.js")
const {checkUserExist} = require("../middlewares/database/databaseErrorHelpers")
const router = express.Router();


router.get("/:id,",getSingleUser)
module.exports = router;