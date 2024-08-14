const axios = require('axios');

const httpClientPlugin = {
    get: async (url) => {
        // const response = await axios.get(url);
        const { data } = await axios.get(url);
        return data;
    },

};

// post, put, delete


module.exports = {
    httpClientPlugin,
};
