const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./src/routes");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, path.parse(file.originalname).name + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  res.send(path.join(__dirname, "public"));
});

app.post("/api/upload", upload.single("photo"), (req, res) => {
  const finalImageURL =
    req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename;

  res.json({
    status: "Success Upload",
    image: finalImageURL,
  });
});

app.use(router);

app.listen(PORT, (e) => {
  if (e) throw e;

  console.log("Listening on Port: " + PORT);
});
