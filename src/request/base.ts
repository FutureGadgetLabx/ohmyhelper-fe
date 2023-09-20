import axios from 'axios'

// 根据开发环境和线上环境返回不同的 baseURL
export function getBaseURL(): string {
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

axios.interceptors.response.use(
  response => response,
  error => {
    const resp = error.response
    if (resp && resp.status === 401) {
      // todo 删除本地认证信息，跳转登录页
    }
    return Promise.reject(error)
  }
)
