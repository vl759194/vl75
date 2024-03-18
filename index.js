const crypto = require('crypto');
const axios = require('axios');

// Function to generate a random hexadecimal string of given length
function generateRandomHex(length) {
    return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

// Function to fetch the current price of Bitcoin
async function getBitcoinPrice(currency = 'USD') {
    try {
        const response = await axios.get(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`);
        return response.data.bpi[currency].rate_float;
    } catch (error) {
        throw new Error('Failed to fetch Bitcoin price');
    }
}

module.exports = {
    generateRandomHex,
    getBitcoinPrice
};
