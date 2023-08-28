import Mock, {Random} from 'mockjs'

export const preAuth = Mock.mock('/api/user/preauth', 'get', {
  hasAccount: Random.boolean(),
})

export const login = Mock.mock('/api/user/login', 'post', {
  token: 'ehgkaaDGdkaqeAWRnaskdASDffdfdfavmkop'
})

export const signup = Mock.mock('/api/user/signup', 'post', {
  token: 'ehgkaaDGdkaqeAWRnaskdASDffdfdfavmkopsignup'
})
