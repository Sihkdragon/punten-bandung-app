const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes");
const path = require("path");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json({ type: "application/json" }));
app.use("/api", router);

module.exports = app;
