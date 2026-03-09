require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CSE341 Contacts API");
});

const mongodb = require("./db/connect");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/contacts", require("./routes/contacts"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
});
