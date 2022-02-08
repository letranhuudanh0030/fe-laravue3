import axios from "axios"

export default axios.create({
    baseURL: 'http://be-laravue3.herokuapp.com/api/',
    timeout: 10000,
});