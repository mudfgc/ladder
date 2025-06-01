import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.BETTER_AUTH_URL,
})

export default axiosClient
