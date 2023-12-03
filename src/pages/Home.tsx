import { SiteHeader } from '@/components/home/SiteHeader.tsx'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.tsx'
import { RocketIcon } from '@radix-ui/react-icons'
import { Outlet } from 'react-router-dom'
import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form.tsx'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from '@/components/ui/textarea.tsx'

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  feedback: z.string().min(2, {
    message: 'Feedback must be at least 2 characters.',
  }),
})

type FeedbackFormValues = z.infer<typeof formSchema>
export const Home = () => {
  const defaultFeedbackVals: FeedbackFormValues = {
    email: '',
    feedback: '',
  }
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFeedbackVals,
  })
  return (
    <div className="flex flex-col">
      <SiteHeader />
      <div className="flex-1">
        <div className="border-b">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-4">
            <Alert>
              <RocketIcon className="h-4 w-4" />
              <AlertTitle>欢迎使用Oh My Helper!</AlertTitle>
              <AlertDescription>
                本站正在努力建设中，还处于测试阶段，功能会陆续完善。如果您有任何的建议或反馈，请联系
                <a
                  className="font-medium underline underline-offset-4"
                  href="mailto:cruii811@gmail.com"
                >
                  cruii811@gmail.com
                </a>
              </AlertDescription>
            </Alert>
          </div>
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <Form {...form}>
          <form
            className="md:max-w-[800px] space-y-8"
            onSubmit={form.handleSubmit(data => console.log(data))}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>电子邮箱</FormLabel>
                  <FormControl>
                    <Input placeholder="请输入你的邮箱" {...field} />
                  </FormControl>
                  <FormDescription>
                    如果您希望我们能及时回复您的反馈，请填写您的真实电子邮箱。
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>反馈</FormLabel>
                  <FormControl>
                    <Textarea placeholder="请输入你的反馈" {...field} />
                  </FormControl>
                  <FormDescription>
                    请尽可能详细地描述你的问题，以便我们更好地为你解决。
                  </FormDescription>
                </FormItem>
              )}
            />
            <Button type="submit">提交</Button>
          </form>
        </Form>
      </div>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{' '}
            <a
              href="https://github.com/cruii"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              cruii
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}
