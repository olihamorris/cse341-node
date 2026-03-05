require("dotenv").config();

const express = require("express");
const mongodb = require("./db/connect");

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

// routes
app.use("/contacts", require("./routes/contacts"));

// test route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

mongodb.initDb((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    app.listen(port, () => {
      console.log(`Database connected and server running on port ${port}`);
    });
  }
});