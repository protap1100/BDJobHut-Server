const { getDatabase } = require("../config/db");

const getUsers = async (req, res) => {
  const db = getDatabase();
  const userCollections = db.collection("users");
  const userData = await userCollections.find().toArray();
  res.send(userData);
};

const postUser = async (req, res) => {
  const db = getDatabase();
  const userCollections = db.collection("users");
  const userData = req.body;
  const addUser = await userCollections.insertOne(userData);
  res.send(addUser);
};

module.exports = {
  getUsers,
  postUser,
};
