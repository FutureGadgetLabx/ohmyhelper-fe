interface User {
  avatar: string
  username: string
}

interface Task {
  id: string
  user: User
  title: string
  status: string
  label: string
  priority: string
  lastRunTime: number
  extendProps?: {
    header: string
    title: string
    value: string
  }[]
}

export type taskSchema = Task
