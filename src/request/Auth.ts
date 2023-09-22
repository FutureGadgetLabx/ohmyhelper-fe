import {
  LoginReq,
  LoginResp,
  RegisterReq,
  RegisterResp,
  SendCodeReq,
  SendCodeResp,
} from '@/request/model/Auth.ts'
import axios, { AxiosResponse } from 'axios'
import { getBaseURL } from '@/request/base.ts'

const baseURL = getBaseURL()
export const sendCode = (req: SendCodeReq) =>
  axios.post<SendCodeReq, AxiosResponse<SendCodeResp>>('/auth/code', req, {
    baseURL: baseURL,
  })

export const register = (req: RegisterReq) =>
  axios.post<RegisterReq, AxiosResponse<RegisterResp>>('/auth/register', req, {
    baseURL: baseURL,
  })

export const login = (req: LoginReq) =>
  axios.post<LoginReq, AxiosResponse<LoginResp>>('/auth/login', req, {
    baseURL: baseURL,
  })
