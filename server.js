require("dotenv").config();

const express = require("express");
const mongodb = require("./db/connect");

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

// Home route (for testing deployment)
app.get("/", (req, res) => {
  res.send("CSE341 Web Services API is running");
});

// Routes
app.use("/contacts", require("./routes/contacts"));

// Initialize database
mongodb.initDb((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Database connected");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
});