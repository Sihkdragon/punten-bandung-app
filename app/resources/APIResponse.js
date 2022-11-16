const { getAPIMessage } = require("./APIMessage");

function API_RESPONSE(res, statuscode, data, message = undefined) {
  let statusCode = statuscode ? statuscode : 200;

  return res.status(statuscode).json({
    statusCode,
    message: getAPIMessage(statuscode, message),
    payload: data,
  });
}

module.exports = API_RESPONSE;
