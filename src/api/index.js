import Axios from 'axios';


const api = Axios.create({ baseURL: 'http://35.227.51.169:8080/api/v1/' })

export default api;