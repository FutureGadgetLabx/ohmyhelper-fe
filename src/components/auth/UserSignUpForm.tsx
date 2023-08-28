import * as React from 'react'
import { useState } from 'react'

import { cn } from '@/lib/utils.ts'
import { Icons } from '@/components/icons.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Label } from '@/components/ui/label.tsx'

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
              placeholder="您的电子邮箱"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="flex gap-1">
            <Label className="sr-only" htmlFor="phone">
              Phone
            </Label>
            <Input
              className="w-4/5"
              id="phone"
              placeholder="您的手机号码"
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
            <Label className="sr-only" htmlFor="smscode">
              验证码
            </Label>
            <Input
              id="smscode"
              placeholder="短信验证码"
              type="text"
              disabled={isLoading}
            />
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
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <Button
          className="w-32"
          variant="outline"
          type="button"
          disabled={isLoading}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{' '}
          Github
        </Button>
        <Button
          className="w-32"
          variant="outline"
          type="button"
          disabled={isLoading}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.qq className="mr-2 h-5 w-5" />
          )}{' '}
          QQ
        </Button>
      </div>
    </div>
  )
}
