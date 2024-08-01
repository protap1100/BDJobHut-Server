const { getDatabase } = require("../config/db");

const getUsers = async (req, res) => {
  try {
    const db = getDatabase();
    const userCollections = db.collection("users");
    const userData = await userCollections.find().toArray();
    res.send(userData);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Error fetching users");
  }
};

module.exports = {
  getUsers,
};
