const express = require("express");
const cors = require("cors");
const sequelize = require("./Config/dbConfig");
const contactRoute = require("./routes/contact");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080 || process.env.PORT;

app.use("/contact", contactRoute);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("Connected to the database");
    await sequelize.sync();
    console.log("Synchronized Sequelize models with the database");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
