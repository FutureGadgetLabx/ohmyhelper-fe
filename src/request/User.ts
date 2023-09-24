import { getBaseURL } from '@/request/Base.ts'
import axios, { AxiosResponse } from 'axios'

const baseURL = getBaseURL()

export const getUser = (req: GetUserReq) =>
  axios.get<GetUserResp, AxiosResponse<GetUserResp>>(`/users/${req.userID}`, {
    baseURL: baseURL,
  })
