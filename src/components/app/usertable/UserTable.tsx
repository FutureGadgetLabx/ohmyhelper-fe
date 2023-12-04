import { DataTable } from './data-table.tsx'
import { Job } from '@/components/app/usertable/data/schema.ts'
import { columns } from '@/components/app/usertable/columns.tsx'
import { AppConfigDrawer } from '@/components/app/drawer/AppConfigDrawer.tsx'

import { useAppContext } from '@/components/app/UseAppContext.tsx'

const jobs: Job[] = [
  {
    id: 'TASK-8782',
    user: {
      id: '100001',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    status: 'complete',
    lastRunTime: new Date().getTime(),
    extendProps: [
      {
        title: '当前等级',
        header: 'level',
        value: 'LV6',
      },
      {
        title: '硬币',
        header: 'coins',
        value: '301',
      },
      {
        title: '当前经验',
        header: 'currentExp',
        value: '10000',
      },
      {
        title: '升级还需',
        header: 'diffExp',
        value: '19999',
      },
      {
        title: '升级天数',
        header: 'upgradeDays',
        value: '244天',
      },
    ],
  },
  {
    id: 'TASK-7878',
    user: {
      id: '100002',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    status: 'complete',
    lastRunTime: new Date().getTime(),
    extendProps: [
      {
        title: '硬币',
        header: 'coins',
        value: '302',
      },
      {
        title: '当前经验',
        header: 'currentExp',
        value: '10000',
      },
    ],
  },
  {
    id: 'TASK-7839',
    user: {
      id: '100003',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    status: 'running',
    lastRunTime: new Date().getTime(),
    extendProps: [
      {
        title: '硬币',
        header: 'coins',
        value: '303',
      },
      {
        title: '当前经验',
        header: 'currentExp',
        value: '10000',
      },
    ],
  },
  {
    id: 'TASK-5562',
    user: {
      id: '100004',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    status: 'failed',
    lastRunTime: new Date().getTime(),
    extendProps: [
      {
        title: '硬币',
        header: 'coins',
        value: '304',
      },
      {
        title: '当前经验',
        header: 'currentExp',
        value: '10000',
      },
    ],
  },
  {
    id: 'TASK-8686',
    user: {
      id: '100005',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    status: 'running',
    lastRunTime: new Date().getTime(),
    extendProps: [
      {
        title: '硬币',
        header: 'coins',
        value: '300',
      },
      {
        title: '当前经验',
        header: 'currentExp',
        value: '10000',
      },
    ],
  },
  {
    id: 'TASK-1280',
    user: {
      id: '100006',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    status: 'complete',
    lastRunTime: new Date().getTime(),
    extendProps: [
      {
        title: '硬币',
        header: 'coins',
        value: '300',
      },
      {
        title: '当前经验',
        header: 'currentExp',
        value: '10000',
      },
    ],
  },
  {
    id: 'TASK-7262',
    user: {
      id: '100007',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    status: 'failed',
    lastRunTime: new Date().getTime(),
    extendProps: [
      {
        title: '硬币',
        header: 'coins',
        value: '300',
      },
      {
        title: '当前经验',
        header: 'currentExp',
        value: '10000',
      },
    ],
  },
  {
    id: 'TASK-1138',
    user: {
      id: '100008',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    status: 'running',
    lastRunTime: new Date().getTime(),
    extendProps: [
      {
        title: '硬币',
        header: 'coins',
        value: '300',
      },
      {
        title: '当前经验',
        header: 'currentExp',
        value: '10000',
      },
    ],
  },
  {
    id: 'TASK-7184',
    user: {
      id: '100009',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    status: 'failed',
    lastRunTime: new Date().getTime(),
    extendProps: [
      {
        title: '硬币',
        header: 'coins',
        value: '300',
      },
      {
        title: '当前经验',
        header: 'currentExp',
        value: '10000',
      },
    ],
  },
  {
    id: 'TASK-5160',
    user: {
      id: '100010',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    status: 'complete',
    lastRunTime: new Date().getTime(),
    extendProps: [
      {
        title: '硬币',
        header: 'coins',
        value: '300',
      },
      {
        title: '当前经验',
        header: 'currentExp',
        value: '10000',
      },
    ],
  },
  {
    id: 'TASK-5618',
    user: {
      id: '100011',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    status: 'complete',
    lastRunTime: new Date().getTime(),
    extendProps: [
      {
        title: '硬币',
        header: 'coins',
        value: '300',
      },
      {
        title: '当前经验',
        header: 'currentExp',
        value: '10000',
      },
    ],
  },
  {
    id: 'TASK-6699',
    user: {
      id: '100012',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    status: 'complete',
    lastRunTime: new Date().getTime(),
    extendProps: [
      {
        title: '硬币',
        header: 'coins',
        value: '300',
      },
      {
        title: '当前经验',
        header: 'currentExp',
        value: '10000',
      },
    ],
  },
  {
    id: 'TASK-2858',
    user: {
      id: '100013',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    status: 'complete',
    lastRunTime: new Date().getTime(),
    extendProps: [
      {
        title: '硬币',
        header: 'coins',
        value: '300',
      },
      {
        title: '当前经验',
        header: 'currentExp',
        value: '10000',
      },
    ],
  },
  {
    id: 'TASK-9864',
    user: {
      id: '100014',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    status: 'complete',
    lastRunTime: new Date().getTime(),
    extendProps: [
      {
        title: '硬币',
        header: 'coins',
        value: '300',
      },
      {
        title: '当前经验',
        header: 'currentExp',
        value: '10000',
      },
    ],
  },
  {
    id: 'TASK-8404',
    user: {
      id: '100015',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    status: 'complete',
    lastRunTime: new Date().getTime(),
    extendProps: [
      {
        title: '硬币',
        header: 'coins',
        value: '300',
      },
      {
        title: '当前经验',
        header: 'currentExp',
        value: '10000',
      },
    ],
  },
]
export default function UserTable() {
  const app = useAppContext()
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 py-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">用户列表</h2>
          <p className="text-muted-foreground">
            这是所有使用过该应用的用户以及他们的执行状态
          </p>
        </div>
        <div className="flex justify-end">
          <AppConfigDrawer {...app} />
        </div>
      </div>
      <DataTable data={jobs} columns={columns} />
    </div>
  )
}
