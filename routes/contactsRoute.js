const express = require("express");
const { getContacts } = require("../controller/contactControllers");

const router = express.Router();

router.get("/", getContacts);

module.exports = router;
