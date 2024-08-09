const express = require("express");
const { getUsers, postUser } = require("../controller/userController");

const router = express.Router();

router.get("/", getUsers);
router.post("/register-user", postUser);

module.exports = router;
