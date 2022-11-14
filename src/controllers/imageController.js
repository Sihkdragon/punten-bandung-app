const uploadImage = (req, res) => {
  return res
    .json({ status: "success Access Upload Image Controller", statusCode: 200 })
    .status(200);
};

module.exports = {
  uploadImage,
};
