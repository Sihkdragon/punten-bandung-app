// const multer = require("multer");

// const uploadImage = (req, res) => {
//   return res
//     .json({ status: "success Access Upload Image Controller", statusCode: 200 })
//     .status(200);
// };

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./public/uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, path.parse(file.originalname).name + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// app.post("/api/upload", upload.single("photo"), (req, res) => {
//   const finalImageURL =
//     req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename;

//   res.json({
//     status: "Success Upload",
//     image: finalImageURL,
//   });
// });

// module.exports = {
//   uploadImage,
// };

// app.get("/", (req, res) => {
//   res.send(path.join(__dirname, "public"));
// });
