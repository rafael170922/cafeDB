import axios from 'axios';

const api = axios.create({
    baseURL:'http://10.53.52.29:3335',
})

export default api;