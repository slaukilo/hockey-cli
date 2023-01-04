require('dotenv').config();

const axios = require('axios');
const API_KEY = process.env.API_KEY;

const config = axios.default({
    method: 'GET',
    url: 'https://v1.hockey.api-sports.io/',
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'v1.hockey.api-sports.io'
    }
});

module.exports = {
    config
};