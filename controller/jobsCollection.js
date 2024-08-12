const { getDatabase } = require("../config/db");

const getJobs = async (req, res) => {
  const db = getDatabase();
  const jobsCollection = db.collection("jobs");
  const jobsData = await jobsCollection.find().toArray();
  res.send(jobsData);
};

const postJobs = async (req, res) => {
  const db = getDatabase();
  const jobsCollection = db.collection("jobs");
  const jobData = req.body;
  const addJobs = await jobsCollection.insertOne(jobData);
  console.log(addJobs);
  res.send(addJobs);
};

module.exports = {
  getJobs,
  postJobs,
};
