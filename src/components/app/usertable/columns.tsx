// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ColumnDef } from '@tanstack/react-table'

import { statuses } from './data/data.tsx'
import { DataTableColumnHeader } from './data-table-column-header.tsx'

import { Job, User } from '@/components/app/usertable/data/schema.ts'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx'
import { CalendarIcon, RocketIcon } from '@radix-ui/react-icons'
import dayjs from 'dayjs'
import { Badge } from '@/components/ui/badge.tsx'

export const columns: ColumnDef<Job>[] = [
  {
    accessorKey: 'user',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="用户" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <Avatar className="h-6 w-6">
            <AvatarImage src={row.original.user.avatar} />
            <AvatarFallback>OMH</AvatarFallback>
          </Avatar>
          <span className="ml-1">{row.original.user.username}</span>
        </div>
      )
    },
    enableSorting: true,
  },
  {
    accessorKey: 'extendProps',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="任务信息" />
    ),
    cell: ({ row }) => {
      const extendProps = row.getValue('extendProps') as {
        header: string
        title: string
        value: string
      }[]

      const user = row.getValue('user') as User
      return (
        <div className="flex space-x-2">
          <span className="flex gap-2">
            {extendProps.map(v => {
              return (
                <span key={user.id + '-' + v.header}>
                  <Badge variant="outline">
                    <RocketIcon className="mr-1" />
                    {v.title} : {v.value}
                  </Badge>
                </span>
              )
            })}
          </span>
        </div>
      )
    },
    enableSorting: false,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="任务状态" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        status => status.value === row.getValue('status')
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'lastRunTime',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="上次运行时间" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
          <span>
            {dayjs(row.getValue('lastRunTime')).format('YYYY-MM-DD HH:mm:ss')}
          </span>
        </div>
      )
    },
  },
]
