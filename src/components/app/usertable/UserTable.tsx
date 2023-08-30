import { columns, getFullCol } from './columns.tsx'
import { DataTable } from './data-table.tsx'
import { taskSchema } from '@/components/app/usertable/data/schema.ts'
import { useMemo } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from '@/components/app/usertable/data-table-column-header.tsx'

const tasks: taskSchema[] = [
  {
    id: 'TASK-8782',
    user: {
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    title:
      "You can't compress the program without quantifying the open-source SSD pixel!",
    status: 'in progress',
    label: 'documentation',
    priority: 'medium',
    lastRunTime: new Date().getTime(),
    extendProps: [
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
    ],
  },
  {
    id: 'TASK-7878',
    user: {
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    title:
      'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
    status: 'backlog',
    label: 'documentation',
    priority: 'medium',
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
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    title: 'We need to bypass the neural TCP card!',
    status: 'todo',
    label: 'bug',
    priority: 'high',
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
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    title:
      'The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!',
    status: 'backlog',
    label: 'feature',
    priority: 'medium',
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
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    title:
      "I'll parse the wireless SSL protocol, that should driver the API panel!",
    status: 'canceled',
    label: 'feature',
    priority: 'medium',
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
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    title:
      'Use the digital TLS panel, then you can transmit the haptic system!',
    status: 'done',
    label: 'bug',
    priority: 'high',
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
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    title:
      'The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!',
    status: 'done',
    label: 'feature',
    priority: 'high',
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
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    title:
      "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
    status: 'in progress',
    label: 'feature',
    priority: 'medium',
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
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    title: 'We need to program the back-end THX pixel!',
    status: 'todo',
    label: 'feature',
    priority: 'low',
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
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
    status: 'in progress',
    label: 'documentation',
    priority: 'high',
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
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    title:
      "Generating the driver won't do anything, we need to index the online SSL application!",
    status: 'done',
    label: 'documentation',
    priority: 'medium',
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
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    title:
      "I'll transmit the wireless JBOD capacitor, that should hard drive the SSD feed!",
    status: 'backlog',
    label: 'documentation',
    priority: 'medium',
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
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    title: 'We need to override the online UDP bus!',
    status: 'backlog',
    label: 'bug',
    priority: 'medium',
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
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    title:
      "I'll reboot the 1080p FTP panel, that should matrix the HEX hard drive!",
    status: 'done',
    label: 'bug',
    priority: 'high',
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
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      username: 'cruii',
    },
    title: 'We need to generate the virtual HEX alarm!',
    status: 'in progress',
    label: 'bug',
    priority: 'low',
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
  const fcolumns = useMemo(() => {
    // 基础字段
    const baseColumns: ColumnDef<taskSchema>[] = [
      {
        id: 'id',
        accessorKey: 'id',
        header: '任务ID',
      },
      {
        id: 'title',
        accessorKey: 'title',
        header: '任务标题',
      },
      {
        id: 'user',
        accessorKey: 'user',
        header: '用户',
      },
      // 其他基础字段...
    ]

    // 动态生成的字段
    const dynamicColumns =
      tasks[0]?.extendProps?.map((prop, index) => {
        const dynamicColumn: ColumnDef<taskSchema> = {
          id: 'column-' + index,
          accessorKey: prop.header,
          header: prop.title,
          cell: ({ row }) => (
            <div>{row.original.extendProps?.[index]?.value ?? ''}</div>
          ),
        }

        return dynamicColumn
      }) ?? []

    return [...baseColumns, ...dynamicColumns]
  }, [tasks])

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 py-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">用户列表</h2>
            <p className="text-muted-foreground">
              这是所有使用过该应用的用户以及他们的执行状态
            </p>
          </div>
        </div>
        <DataTable data={tasks} columns={fcolumns} />
      </div>
    </>
  )
}
