const API_urls = {
  post: {
    url: '/post',
    get url_withID() {
      return this.url + '/:id'
    }
  },
  comment: {
    url: '/comments',
    get url_withID() {
      return this.url + '/:id'
    }
  },
  gallery: {
    url: '/gallery',
    get url_withID() {
      return this.url + '/:id'
    }
  },
  auth: {
    url: '/auth',
    get url_withID() {
      return this.url + '/:id'
    }
  },
  users: {
    url: '/users',
    get url_withID() {
      return this.url + '/:id'
    }
  }
}

module.exports = API_urls
