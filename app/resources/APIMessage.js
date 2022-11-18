const APIMessage = {
  200: "ok",
  201: "Success Create",
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  500: "Internal Server Error",
};

function getAPIMessage(statuscode, message = undefined) {
  return message ? message : APIMessage[statuscode];
}

module.exports = {
  getAPIMessage,
};
