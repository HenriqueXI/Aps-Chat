import Axios from 'axios';


const api = Axios.create({ baseURL: 'https://280731543224.ngrok.io/api/v1/' })

export default api;