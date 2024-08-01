require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const { connectToDatabase } = require("./config/db");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
connectToDatabase();

// Routes
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("JobHuntBd Is Running");
});

app.listen(port, () => {
  console.log(`JobHuntBd is running on port ${port}`);
});
