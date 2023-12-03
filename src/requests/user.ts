import { getBaseURL } from '@/requests/base.ts'
import axios, { AxiosResponse } from 'axios'

const baseURL = getBaseURL()

export interface GetUserReq {
  userId?: string
}

export interface GetUserResp {
  userId: string
  nickname: string
  email: string
  profile: string
  avatarUrl: string
  createdAt: string
}

export const getUser = (req: GetUserReq) =>
  axios.get<GetUserResp, AxiosResponse<GetUserResp>>(`/users/${req.userId}`, {
    baseURL: baseURL,
  })
