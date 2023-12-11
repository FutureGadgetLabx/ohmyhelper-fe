import Mock from 'mockjs'

Mock.setup({
  timeout: '300-600',
})
export const getJobConfig = Mock.mock(/\/api\/jobs\/config.*/, 'get', () => {
  return {
    code: 0,
    data: {
      jobConfigId: "123",
      appId: Mock.Random.string(5),
      version: 'v1.0',
      cron: '0 0 0 * * *',
      settings: {
        DEDE_USER_ID: Mock.Random.string(8),
        BILI_JCT: Mock.Random.string(32),
        SESSDATA: Mock.Random.string(32),
        USER_AGENT: Mock.Random.string(32),
        AUTO_CHARGE: Mock.Random.boolean(),
        DONATE_GIFT: Mock.Random.boolean(),
        DONATE_COINS: Mock.Random.boolean(),
        RESERVE_COINS: Mock.Random.integer(0, 100),
        FOLLOW_DEVELOPER: Mock.Random.boolean(),
        AUTO_CHARGE_TARGET: Mock.Random.string(8),
        DONATE_GIFT_TARGET: Mock.Random.string(8),
        DONATE_COIN_STRATEGY: Mock.Random.string(2),
      },
    },
  }
})
