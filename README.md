# vl75

vl75 is a Node.js module designed for cryptographic operations and cryptocurrency data retrieval.

## Installation

You can install vl75 via npm: `npm install vl75`

## Usage
```javascript
const CryptoCraft = require('cryptocraft');

// Generate a random hexadecimal string of length 16
const randomHex = CryptoCraft.generateRandomHex(16);
console.log('Random Hex:', randomHex);

// Get the current price of Bitcoin in USD
CryptoCraft.getBitcoinPrice()
  .then(price => {
    console.log('Bitcoin Price (USD):', price);
  })
  .catch(err => {
    console.error('Error:', err.message);
  });
```

