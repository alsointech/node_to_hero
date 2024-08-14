// const axios = require('axios');
import axios from "axios";


export const httpClientPlugin = {
    get: async (url: string) => {
        // const response = await axios.get(url);
        const { data } = await axios.get(url);
        return data;
    },

};

// post, put, delete
