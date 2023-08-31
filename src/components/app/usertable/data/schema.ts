export type User = {
  id: string
  avatar: string
  username: string
}

export type Task = {
  id: string
  user: User
  status: string
  lastRunTime: number
  extendProps: {
    header: string
    title: string
    value: string
  }[]
}
