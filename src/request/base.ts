import axios from 'axios'

// 根据开发环境和线上环境返回不同的 baseURL
export function getBaseURL(): string {
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:8888/'
  } else {
    return 'https://api.ohmyhelper.com/'
  }
}

axios.interceptors.request.use(config => {
  config.baseURL = getBaseURL()
  return config
})

export default axios
