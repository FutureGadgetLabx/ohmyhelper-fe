import {atom} from 'recoil'
import {User} from '@/types/types.ts'
import {AppDetail} from "@/requests/app.ts";

export const userState = atom<User | undefined>({
  key: 'userState',
  default: undefined,
})

export const appDetailRecoilState = atom<AppDetail>({
  key: 'appDetailRecoilState',
  default: undefined,
})
