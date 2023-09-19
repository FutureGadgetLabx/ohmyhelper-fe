import axios from 'axios'
import { toast } from '@/components/ui/use-toast.ts'

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
    toast({
      variant: 'destructive',
      title: '请求出错',
      description: error.response.data,
    })
    return Promise.resolve('Error handled')
  }
)
