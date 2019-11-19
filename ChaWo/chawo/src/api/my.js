import axios from 'axios';

// 创建axios实例
const my = axios.create({
    baseURL: 'http://121.199.11.112:8011'
});

function get(path, params, config = {}) {
    return my.get(path, {
        ...config,
        params
    })
}

function post(path, data = {}, config = {}) {
    return my.post(path, data, config)
}

export default {
    get,
    post
}