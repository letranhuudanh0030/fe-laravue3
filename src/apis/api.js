import axios from "axios"

export default axios.create({
    baseURL: 'https://be-laravue3.herokuapp.com/',
    timeout: 10000,
});