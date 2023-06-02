import axios from './axios';
let instance = axios();
export default {
    get (url, params, headers) {
        let options = {};
        if (params) {
            options.params = params;
        }
        if (headers) {
            options.headers = headers;
        }
        return instance.get(url, options);
    },
    post (url, data, headers) {
        let options = {};
        let requestData;
        if (data) {
            requestData = data;
        }
        if (headers) {
            options.headers = headers;
        }
        return instance.post(url, requestData, options);
    }
};
