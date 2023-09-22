export interface LoginReq {
  email: string
  code: string
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
