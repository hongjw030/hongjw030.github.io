import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `https://hongjw030-github-io.vercel.app/api`,
})

export default axiosInstance
