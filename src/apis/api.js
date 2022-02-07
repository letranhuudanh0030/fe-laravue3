import axios from "axios"

export default axios.create({
    baseURL: 'http://be-blog.test/api/',
    timeout: 10000,
});