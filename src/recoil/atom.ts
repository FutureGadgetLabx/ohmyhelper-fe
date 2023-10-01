import { atom } from 'recoil'
import { User } from '@/types/types.ts'

export const userState = atom<User | undefined>({
  key: 'userState',
  default: undefined,
})
