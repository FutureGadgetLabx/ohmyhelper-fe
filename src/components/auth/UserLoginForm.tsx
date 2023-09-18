import * as React from 'react'
import { useState } from 'react'

import { cn } from '@/lib/utils.ts'
import { Icons } from '@/components/icons.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Label } from '@/components/ui/label.tsx'
import '@/mocks/auth.ts'
import { useNavigate } from 'react-router-dom'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const [isLoading, setIsLoading] = useState(false)

  const [email, setEmail] = useState('')
  const [passwd, setPasswd] = useState('')
  const navigate = useNavigate()

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
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
              className={cn(
                'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                className
              )}
              id="email"
              placeholder="电子邮箱"
              value={email}
              onChange={e => {
                setEmail(e.target.value)
              }}
              type="text"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              required={true}
              disabled={isLoading}
              ref={inputRef}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="passwd">
              Email
            </Label>
            <Input
              className={cn(
                'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                className
              )}
              id="passwd"
              placeholder="密码"
              value={passwd}
              onChange={e => setPasswd(e.target.value)}
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              required={true}
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            立即登录
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
          {<Icons.gitHub className="mr-2 h-4 w-4" />} Github
        </Button>
        <Button
          className="w-32"
          variant="outline"
          type="button"
          disabled={isLoading}
        >
          {<Icons.qq className="mr-2 h-5 w-5" />} QQ
        </Button>
      </div>
    </div>
  )
}
