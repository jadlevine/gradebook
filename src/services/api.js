import Axios from 'axios'

// // Heroku
// export const BASE_URL = 'https://<heroku-backend>.herokuapp.com/'

// Running BACKEND locally
export const BASE_URL = 'http://localhost:3001/gradebook'

const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default Client
