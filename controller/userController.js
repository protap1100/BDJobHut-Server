const { getDatabase } = require("../config/db");

const getUsers = async (req, res) => {
  const db = getDatabase();
  const userCollections = db.collection("users");
  const userData = await userCollections.find().toArray();
  // console.log("hi")
  res.send(userData);
};

module.exports = {
  getUsers,
};
