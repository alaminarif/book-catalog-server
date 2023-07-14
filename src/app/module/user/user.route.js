const express = require("express");
const router = express.Router();
const UserController = require("./user.controller");

router.get("/", UserController.getUser);
router.post("/", UserController.createUser);

module.exports = router;
