const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(router);

app.listen(PORT, (e) => {
  if (e) throw e;

  console.log("Listening on Port: " + PORT);
});
