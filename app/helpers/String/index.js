const slugify = (text) => {
  return text.toLowerCase().replaceAll(' ', '-')
}

module.exports = {
  slugify
}
