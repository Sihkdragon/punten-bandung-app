const { getAPIMessage } = require('./APIMessage')

function API_RESPONSE(res, data, statusCode = 200, message = undefined, type = null) {
  let isEmpty = true
  if (data) {
    isEmpty = typeof data !== 'number' && Object.keys(data).length < 1 // check weather data is {} or []
  }

  // send data if data is not empty
  if (!isEmpty) {
    return res.status(statusCode).json({
      statusCode,
      message: getAPIMessage(statusCode, message),
      payload: data
    })
  }

  // send data if data is empty
  return res.status(404).json({
    statusCode: 404,
    message: type ? `Data ${type} tidak ditemukan` : 'Data tidak ditemukan',
    payload: data !== null && data !== undefined && data.length < 1 ? [] : null
  })
}

function BASE_API_RESPONSE(statusCode, message, payload = undefined) {
  return {
    statusCode,
    payload,
    message
  }
}

module.exports = { API_RESPONSE, BASE_API_RESPONSE }
