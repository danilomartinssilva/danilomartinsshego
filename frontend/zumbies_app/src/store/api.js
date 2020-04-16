import axios from 'axios';

const url = "http://192.168.100.69:3010";



const api = axios.create({
  baseURL: url
})


export default api;