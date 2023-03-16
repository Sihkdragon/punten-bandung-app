const { slugify } = require("../String");

const ParseBody = (reqbody, req) => {
  const { title, writer, type, body, writer_id, tag1, tag2, tag3, tag4, tag5 } = reqbody;
  const thumbnail_url =
    req.protocol + "://" + req.get("host") + "/assets/img/post/" + req.file.filename;

  //   const thumbnail_url = "http://localhost:8080";
  return {
    title,
    writer,
    type,
    slug: slugify(title),
    body,
    writer_id: +writer_id,
    thumbnail_url,
    tags: {
      create: {
        tag1,
        tag2,
        tag3,
        tag4,
        tag5,
      },
    },
  };
};

module.exports = ParseBody;
