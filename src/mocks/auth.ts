import Mock from 'mockjs'

const preAuth = Mock.mock('api/account/preauth', 'get', {
  hasAccount: false,
})

export default preAuth
