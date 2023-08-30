import { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge.tsx'
import { Checkbox } from '@/components/ui/checkbox.tsx'

import { labels, statuses } from './data/data.tsx'
import { DataTableColumnHeader } from './data-table-column-header.tsx'

import { taskSchema } from '@/components/app/usertable/data/schema.ts'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx'
import { CalendarIcon } from '@radix-ui/react-icons'
import dayjs from 'dayjs'

export const columns: ColumnDef<taskSchema>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="任务ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
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
    enableSorting: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      const label = labels.find(label => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue('title')}
          </span>
        </div>
      )
    },
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
            {dayjs(row.original.lastRunTime).format('YYYY-MM-DD HH:mm:ss')}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
]

export const getFullCol = (task: taskSchema): ColumnDef<taskSchema>[] => {
  task.extendProps?.forEach((p, index) => {
    columns.push({
      accessorKey: p.header ?? 'Unknown',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={p.title ?? 'Unknown'} />
      ),
      cell: ({ row }) => {
        return (
          <div id={index + ''} className="flex items-center">
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/*@ts-ignore*/}
            {row.original.extendProps[index].value}
          </div>
        )
      },
      enableSorting: false,
    })
  })

  return columns
}
