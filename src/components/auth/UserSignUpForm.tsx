import * as React from 'react'
import { useState } from 'react'

import { cn } from '@/lib/utils.ts'
import { Icons } from '@/components/icons.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Link } from 'react-router-dom'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserSignUpForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  // 发送验证码按钮
  const [codeBtnText, setCodeBtnText] = useState('发送验证码')
  const [codeBtnDisabled, setCodeBtnDisabled] = useState(false)
  const [codeBtnLoading, setCodeBtnLoading] = useState(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  const sendSmsCode = () => {
    // todo 发送验证码
    setCodeBtnLoading(true)
    setCodeBtnDisabled(true)
    countDown()
  }

  const countDown = () => {
    let seconds = 60
    const timer = setInterval(() => {
      seconds -= 1
      if (seconds > 0) {
        setCodeBtnText(`${seconds}秒`)
      } else {
        clearInterval(timer)
        setCodeBtnText('发送验证码')
        setCodeBtnDisabled(false)
        setCodeBtnLoading(false)
      }
    }, 1000)
  }
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="电子邮箱"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="flex gap-1">
            <Label className="sr-only" htmlFor="code">
              验证码
            </Label>
            <Input
              className="w-4/5"
              id="code"
              placeholder="邮箱验证码"
              type="text"
              autoCapitalize="none"
              autoComplete="phone"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Button
              disabled={codeBtnDisabled}
              onClick={sendSmsCode}
              variant="outline"
              className="w-40"
            >
              {codeBtnLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <></>
              )}{' '}
              {codeBtnText}
            </Button>
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input id="password" placeholder="您的密码" type="password" />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="confirmPassword">
              Password
            </Label>
            <Input
              id="confirmPassword"
              placeholder="确认您的密码"
              type="password"
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            立 即 注 册
          </Button>
          <div className="flex justify-end">
            <Link
              to="/login"
              className="text-sm  text-muted-foreground underline underline-offset-4"
            >
              返回登录
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
