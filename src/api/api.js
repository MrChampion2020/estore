import axios from 'axios';
const local = 'http://localhost:8000'
const production = 'https://api-0qer.onrender.com'
const api = axios.create({
    baseURL: `${production}/api`,
    withCredentials : true
})
export default api