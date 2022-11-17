const multer = require("multer");
const path = require("path");

const galleryDest = "./public/assets/img/gallery";
const tabloidDest = "./public/assets/img/post";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/assets/img/gallery");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      path.parse(file.originalname).name + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const StorageProvider = (target) => {
  const PathDest = target === "gallery" ? galleryDest : tabloidDest;

  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, PathDest);
    },
    filename: (req, file, cb) => {
      cb(
        null,
        path.parse(file.originalname).name + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
};

const UploadProvider = (target) => {
  return multer({ storage: StorageProvider(target) });
};

module.exports = UploadProvider;
