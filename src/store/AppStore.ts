import { makeAutoObservable } from 'mobx'

type User = {
  userID: string
  nickname: string
  email: string
}
export default class AppStore {
  user?: User = undefined

  constructor() {
    makeAutoObservable(this)
  }

  setUser(user: User) {
    this.user = user
  }
}
