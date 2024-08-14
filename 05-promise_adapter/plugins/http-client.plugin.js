const axios = require('axios');

const httpClientPlugin = {
    get: async(url) => {
        const response = await fetch(url);
        return await response.json();
    },

    // post, put, delete
}

module.exports = {
    httpClientPlugin,
};
