const API_urls = {
  tabloid: {
    url: "/tabloids",
    get url_withID() {
      return this.url + "/:id";
    },
  },
  comment: {
    url: "/comments",
    get url_withID() {
      return this.url + "/:id";
    },
  },
  gallery: {
    url: "/gallery",
    get url_withID() {
      return this.url + "/:id";
    },
  },
};

module.exports = API_urls;
