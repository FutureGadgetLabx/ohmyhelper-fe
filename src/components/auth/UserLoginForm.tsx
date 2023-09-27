import * as React from 'react'
import { useState } from 'react'

import { cn } from '@/lib/utils.ts'
import { Icons } from '@/components/icons.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form.tsx'
import { login } from '@/requests/auth.ts'
import { toast } from '@/components/ui/use-toast.ts'
import { getUser } from '@/requests/user.ts'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { userState } from '@/recoil/atom.ts'

const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, '请输入您的Email')
    .email({ message: 'Email格式不合法' }),
  passwd: z
    .string({ required_error: '请输入您的密码' })
    .min(6, { message: '密码不少于6位' })
    .max(16, { message: '密码不高于16位' }),
})

type LoginFormValues = z.infer<typeof loginFormSchema>

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
  const defaultValues: LoginFormValues = {
    email: '',
    passwd: '',
  }

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: defaultValues,
  })

  const [isLoading, setIsLoading] = useState(false)
  const setUser = useSetRecoilState(userState)
  const navigate = useNavigate()

  async function onSubmit(data: LoginFormValues) {
    setIsLoading(true)
    try {
      const resp = await login({ email: data.email, passwd: data.passwd })
      const userResp = await getUser({ userID: resp.data.userID })
      setUser({ ...userResp.data })
      // localStorage.setItem('user', JSON.stringify(userResp.data))
      navigate('/')
    } catch (error) {
      toast({
        variant: 'destructive',
        title: '登录失败',
        description: error.response
          ? error.response.data.message
          : error.message,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className={cn(
                          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                          className
                        )}
                        id="email"
                        placeholder="电子邮箱"
                        type="text"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="passwd"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className={cn(
                          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                          className
                        )}
                        id="passwd"
                        placeholder="密码"
                        type="password"
                        autoCapitalize="none"
                        autoCorrect="off"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
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
      </Form>
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
