const columns = [
  { name: 'ID', uid: 'id', sortable: true },
  { name: '用户', uid: 'user', sortable: true },
  { name: '任务定时', uid: 'cron' },
  // { name: 'ROLE', uid: 'role', sortable: true },
  { name: '创建时间', uid: 'createdAt' },
  { name: '上次运行时间', uid: 'lastRunTime', sortable: true },
  { name: '状态', uid: 'status', sortable: true },
  { name: 'ACTIONS', uid: 'actions' },
]

const statusOptions = [
  { name: '正常', uid: 'active' },
  { name: 'Paused', uid: 'paused' },
  { name: '过期', uid: 'expired' },
]

const users = [
  {
    id: 1,
    user: 'cruii',
    userId: '16056',
    avatar: 'https://ui.shadcn.com/avatars/02.png',
    cron: '0 0 0 * * *',
    status: 'active',
    createdAt: '2023-12-04T18:08:25Z',
    lastRunTime: 'Wed, 06 Dec 2023 15:50:00 +0800'
  },
  {
    id: 2,
    user: 'zmy',
    userId: '16051',
    avatar: 'https://ui.shadcn.com/avatars/04.png',
    cron: '0 0 0 * * *',
    status: 'expired',
    createdAt: '2023-12-04T18:08:25Z',
    lastRunTime: 'Wed, 06 Dec 2023 15:50:00 +0800'
  },
]

export { columns, users, statusOptions }
