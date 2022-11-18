function getPostUrl(title) {
  return new Date().toLocaleDateString() + "/" + title.toLowerCase().split(" ").join("-");
}

module.exports = { getPostUrl };
