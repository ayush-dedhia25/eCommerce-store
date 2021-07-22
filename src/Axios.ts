import axios from 'axios';

const Axios = axios.create({
   baseURL: 'http://localhost:3000/api',
   timeout: 1500,
   headers: { 'Content-Type': 'application/json' }
});

export default Axios;