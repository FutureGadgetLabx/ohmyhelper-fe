import { getBaseURL } from '@/requests/base.ts'
import axios, { AxiosResponse } from 'axios'

const baseURL = getBaseURL()

export interface GetUserReq {
  userID?: string
}

export interface GetUserResp {
  userID: string
  nickname: string
  email: string
}

export const getUser = (req: GetUserReq) =>
  axios.get<GetUserResp, AxiosResponse<GetUserResp>>(`/users/${req.userID}`, {
    baseURL: baseURL,
  })
