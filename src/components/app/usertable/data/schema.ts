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
}

export type taskSchema = Task
