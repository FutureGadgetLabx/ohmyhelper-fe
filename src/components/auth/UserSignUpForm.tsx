import * as React from 'react'
import { useState } from 'react'
import { cn } from '@/lib/utils.ts'
import { Icons } from '@/components/icons.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { useToast } from '@/components/ui/use-toast.ts'
import { register, sendCode } from '@/request/Auth.ts'
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

const signupFormSchema = z.object({
  email: z
    .string({ required_error: '请输入您的Email' })
    .email({ message: 'Email格式不合法' }),
  code: z
    .string({ required_error: '请填写验证码' })
    .length(6, { message: '验证码不合法' }),
  passwd: z
    .string({ required_error: '请输入密码' })
    .min(6, { message: '密码不少于6位' })
    .max(16, { message: '密码不多于16位' }),
  repasswd: z
    .string({ required_error: '请输入密码' })
    .min(6, { message: '密码不少于6位' })
    .max(16, { message: '密码不高于16位' }),
})

type SignUpFormValues = z.infer<typeof signupFormSchema>

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserSignUpForm({ className, ...props }: UserAuthFormProps) {
  const defaultValues: SignUpFormValues = {
    email: '',
    code: '',
    passwd: '',
    repasswd: '',
  }
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: defaultValues,
  })

  // 弹窗
  const { toast } = useToast()
  // const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // 发送验证码
  const [codeBtnText, setCodeBtnText] = useState('发送验证码')
  const [codeBtnDisabled, setCodeBtnDisabled] = useState(false)
  const [codeBtnLoading, setCodeBtnLoading] = useState(false)

  const navigate = useNavigate()

  async function onSubmit(data: SignUpFormValues) {
    if (data.passwd !== data.repasswd) {
      form.setError('repasswd', { message: '输入的密码不一致' })
      return
    }
    setIsLoading(true)
    try {
      await register(data)
      toast({
        title: '注册账号成功',
      })
      setTimeout(() => {
        navigate('/login')
      }, 1000)
    } catch (error) {
      toast({
        variant: 'destructive',
        title: '注册账号失败',
        description: error.response
          ? error.response.data.message
          : error.message,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendCode = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const result = await form.trigger('email')
    if (!result) {
      form.setError('email', { message: 'Email格式不合法' })
      return
    }
    setCodeBtnLoading(true)
    setCodeBtnDisabled(true)

    try {
      await sendCode({
        email: form.getValues().email,
        action: 'register',
      })

      countDown()
    } catch (error) {
      setCodeBtnLoading(false)
      setCodeBtnDisabled(false)
      setCodeBtnText('发送验证码')

      toast({
        variant: 'destructive',
        title: '验证码发送失败',
        description: error.response ? error.response.data : error.message,
      })
    }
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
                        id="email"
                        placeholder="电子邮箱"
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
            <div className="flex gap-1">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem className="w-4/5">
                    <FormControl>
                      <Input
                        id="code"
                        placeholder="邮箱验证码"
                        type="text"
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
              <Button
                disabled={codeBtnDisabled}
                onClick={handleSendCode}
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
              <FormField
                control={form.control}
                name="passwd"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        id="passwd"
                        placeholder="密码"
                        type="password"
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
                name="repasswd"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        id="repasswd"
                        placeholder="确认密码"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" disabled={isLoading}>
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
      </Form>
    </div>
  )
}
