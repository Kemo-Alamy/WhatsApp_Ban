const axios = require('axios');
function getBuffer(url) { return axios.get(url, { responseType: 'arraybuffer' }).then(res => Buffer.from(res.data)); }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
module.exports = { getBuffer, sleep };