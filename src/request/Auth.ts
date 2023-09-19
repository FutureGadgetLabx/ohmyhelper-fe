import { SendCodeReq, SendCodeResp } from '@/request/model/Auth.ts'
import axios, { AxiosResponse } from 'axios'
import { getBaseURL } from '@/request/base.ts'

const baseURL = getBaseURL()
export const sendCode = (data: SendCodeReq) =>
  axios.post<SendCodeReq, AxiosResponse<SendCodeResp>>('/auth/code', data, {
    baseURL: baseURL,
  })
