const express = require('express');

const userController = require('../controllers/userController')


const router = express.Router();


router.get("/test-me", function (req, res) {
  res.send("My first ever api!")
})


// router.post("/registration",multipleFiles, rtcontroller.registration)
// router.get("/getAlldata", rtcontroller.getAlldata)

router.post("/register", userController.User)
router.post("/login", userController.login)
router.get("/getusers", userController.getUsers)

module.exports = router;