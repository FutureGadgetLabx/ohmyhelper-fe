import axios, { AxiosResponse } from 'axios'
import { getBaseURL } from '@/requests/base.ts'

const baseURL = getBaseURL()

export interface LoginReq {
  email: string
  passwd: string
}

export interface LoginResp {
  userID?: string
}

export interface RegisterReq {
  email?: string
  passwd?: string
  code?: string
}

export interface RegisterResp {
  token?: string
  refreshToken?: string
}

export interface SendCodeReq {
  email?: string
  action?: string
}

export interface SendCodeResp {
  status?: string
}

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

export const logout = () =>
  axios.post('/auth/logout', null, {
    baseURL: baseURL,
  })
