import * as React from 'react'
import { useState } from 'react'
import { cn } from '@/lib/utils.ts'
import { Icons } from '@/components/icons.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Link } from 'react-router-dom'
import { useToast } from '@/components/ui/use-toast.ts'
import { sendCode } from '@/request/Auth.ts'
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

const signUpFormSchema = z.object({
  email: z
    .string({ required_error: '请填写Email地址' })
    .email({ message: 'Email格式不合法' }),
  code: z
    .string({ required_error: '请填写验证码' })
    .length(6, { message: '验证码不合法' }),
})

type SignUpFormValues = z.infer<typeof signUpFormSchema>

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserSignUpForm({ className, ...props }: UserAuthFormProps) {
  const values: SignUpFormValues = {
    email: '',
    code: '',
  }
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: values,
  })

  // 弹窗
  const { toast } = useToast()
  // const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // 发送验证码
  const [codeBtnText, setCodeBtnText] = useState('发送验证码')
  const [codeBtnDisabled, setCodeBtnDisabled] = useState(false)
  const [codeBtnLoading, setCodeBtnLoading] = useState(false)

  function onSubmit(data: SignUpFormValues) {
    toast({
      title: 'Uh oh! Something went wrong.',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  const handleSendCode = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const result = await form.trigger('email')
    if (!result) {
      form.setError('email', { message: 'Email格式不合法' })
      return
    }
    const resp = await sendCode({
      email: form.getValues().email,
      action: 'register',
    })
    if (resp.status === 200) {
      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      })
    } else {
      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      })
      return
    }
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
