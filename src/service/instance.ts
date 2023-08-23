import axios from 'axios'
import Config from 'react-native-config'

const instance = axios.create({
  baseURL: Config.API_URL,
  timeout: 1000
})

instance.interceptors.request.use(async (config) => {
  console.log('---> API REQUEST', config.url, { params: config.params, data: config.data })

  // burada bir şeyler

  return config
})

instance.interceptors.response.use(
  async (response) => response,
  async (error) => {
    console.log('<--- API ERROR', error?.response?.config?.url, error)

    // burada bir şeyler

    throw error
  }
)

export default instance
