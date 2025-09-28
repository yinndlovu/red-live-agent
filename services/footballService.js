const axios = require("axios");
const {
  footballApiUrl,
  footballApiKey,
  footballApiHost,
} = require("../config/config");

async function getHeadToHead(h2h) {
  try {
    const options = {
      method: "GET",
      url: `${footballApiUrl}/headtohead`,
      params: { h2h },
      headers: {
        "x-rapidapi-key": footballApiKey,
        "x-rapidapi-host": footballApiHost,
      },
    };

    const response = await axios.request(options);
    return response.data.response;
  } catch (error) {
    console.error(error.response?.data || error.message);
    return [];
  }
}

module.exports = { getHeadToHead };
