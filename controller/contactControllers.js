// controller/contactControllers.js
const { getDatabase } = require("../config/db");

const getContacts = async (req, res) => {
  try {
    const db = getDatabase();
    const contactCollections = db.collection("contacts");
    const result = await contactCollections.find().toArray();
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching contacts" });
  }
};

module.exports = { getContacts };
