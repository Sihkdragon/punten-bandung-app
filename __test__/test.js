const date_data = "2022-11-18T10:55:18.245Z";
const Title_data = "Siapa Saya Ini Jadi Siapa";

function getDate() {
  return new Date().toLocaleDateString();
}

function getTitle() {
  return Title_data.toLowerCase().split(" ").join("-");
}

function getPostUrl(title) {
  return new Date().toLocaleDateString() + "/" + title.toLowerCase().split(" ").join("-");
}

console.log(getPostUrl(Title_data));
