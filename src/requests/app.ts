import axios from 'axios'
import { getBaseURL } from '@/requests/base.ts'

const baseURL = getBaseURL()

export interface PageInfo {
  page: number
  pageSize: number
  total: number
}

export interface App {
  appId: number
  name: string
  author: string
  authorAvatarUrl: string
  description: string
  language: string
  stars: number
  createdAt: Date
  updatedAt: Date
}

export interface ListAppResp {
  apps: App[]
  pageInfo: PageInfo
}

export interface Author {
  userId: number
  nickname: string
  avatarUrl: string
  profile: string
  email: string
  createdAt: Date
}

export interface AppDetail {
  appId?: string
  name?: string
  author?: Author
  description?: string
  language?: string
  stars?: number
  image?: string
  versions?: string[]
  params?: string
  createdAt?: Date
  updatedAt?: Date
}

export const listApp = (page: number, pageSize: number) =>
  axios.get<ListAppResp>(`/apps?page=${page}&pageSize=${pageSize}`, {
    baseURL: baseURL,
  })

export const getApp = (appId?: string) =>
  axios.get<AppDetail>(`/apps/${appId}`, {
    baseURL: baseURL,
  })
