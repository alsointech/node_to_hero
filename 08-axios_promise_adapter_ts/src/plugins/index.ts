// const { httpClientPlugin } = require('./http-client.plugin');
// const buildLogger  = require('./logger.plugin');
import { getAgePlugin } from './get-age.plugin';
import { getUUID } from './get-id.plugin';
import { httpClientPlugin } from './http-client.plugin';
import { buildLoggerPlugin } from './logger.plugin';


export {
    httpClientPlugin,
    buildLoggerPlugin,
    getAgePlugin,
    getUUID
};
