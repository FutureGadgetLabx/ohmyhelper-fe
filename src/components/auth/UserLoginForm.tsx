import * as React from 'react'
import { useState } from 'react'

import { cn } from '@/lib/utils.ts'
import { Icons } from '@/components/icons.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Label } from '@/components/ui/label.tsx'
import { ClearableInput } from '@/components/ui/input-with-clearable.tsx'
import axios from 'axios'
import '@/mocks/auth.ts'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
  const inputRef = React.useRef(null)

  const [isLoading, setIsLoading] = useState(false)

  const [account, setAccount] = useState('')
  // 验证码相关
  const [showCodeInput, setShowCodeInput] = useState(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    const response = await axios.get('/api/account/preauth')
    console.log(response.data)
    setTimeout(() => {
      setIsLoading(false)
      setShowCodeInput(true)
    }, 3000)
  }

  const clearInput = () => {
    setShowCodeInput(false)
    setAccount('')
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="account">
              Email
            </Label>
            <ClearableInput
              id="account"
              placeholder="您的电子邮箱"
              value={account}
              onChange={e => {
                setShowCodeInput(false)
                setAccount(e.target.value)
              }}
              handleClear={clearInput}
              type="text"
              autoCapitalize="none"
              autoComplete="account"
              autoCorrect="off"
              disabled={isLoading}
              ref={inputRef}
            />
          </div>
          {showCodeInput && (
            <div className="grid gap-1">
              <p className="text-sm text-muted-foreground">
                我们刚刚向您发送了验证码，请检查您的收件箱并粘贴到下面的文本框中。
              </p>
              <Label className="sr-only" htmlFor="code">
                验证码
              </Label>
              <Input id="code" placeholder="邮箱验证码" type="text" />
            </div>
          )}
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            立 即 登 陆
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
