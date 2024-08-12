const express = require("express");
const { getJobs, postJobs } = require("../controller/jobsCollection");

const router = express.Router();

router.get("/get-jobs", getJobs);
router.post("/add-jobs", postJobs);

module.exports = router;
