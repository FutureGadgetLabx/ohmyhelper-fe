import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card.tsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx'
import {
  ArchiveIcon,
  CalendarIcon,
  GitHubLogoIcon,
  PersonIcon,
} from '@radix-ui/react-icons'
import dayjs from 'dayjs'

interface HeadDetailsProps {
  id?: string
}

type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

export const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  // ...
]

export const HeadDetails = (props: HeadDetailsProps) => {
  console.log(props.id)
  const date = new Date()
  const displayFormat = 'MM YYYY'
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">App标题</h1>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        每日自动完成哔哩哔哩日常任务，如观看视频，分享视频，投币等。
      </blockquote>
      <div className="pt-4 flex gap-4">
        <div className="flex gap-4">
          <div className="flex justify-center items-center">
            <PersonIcon className="h-4 w-4 text-muted-foreground mx-1" />
            <span className="font-bold text-muted-foreground">作者</span>
          </div>
          <div className="underline cursor-pointer underline-offset-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="flex">
                  <Avatar className="h-6 w-6 cursor-pointer">
                    <AvatarImage src="https://ui.shadcn.com/avatars/02.png" />
                    <AvatarFallback>CR</AvatarFallback>
                  </Avatar>
                  <span className="ml-1">cruii</span>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="https://ui.shadcn.com/avatars/02.png" />
                    <AvatarFallback>CR</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 w-56">
                    <h4 className="text-sm font-semibold">cruii</h4>
                    <p className="text-sm line-clamp-2">oh my helper founder</p>
                    <div className="flex items-center pt-2">
                      <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
                      <span className="text-xs text-muted-foreground">
                        Joined {dayjs(date).format(displayFormat)}
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex justify-center items-center">
            <ArchiveIcon className="h-4 w-4 text-muted-foreground mx-1" />
            <span className="font-bold text-muted-foreground">当前版本</span>
          </div>
          <span className="ml-1">v1.0.1</span>
        </div>
        <div className="flex gap-4">
          <div className="flex justify-center items-center">
            <GitHubLogoIcon className="h-4 w-4 text-muted-foreground mx-1" />
            <span className="font-bold text-muted-foreground">开源地址</span>
          </div>
          <span className="ml-1">-</span>
        </div>
      </div>
      <div className="pt-4 flex gap-4">
        <div className="flex justify-center items-center">
          <CalendarIcon className="h-4 w-4 text-muted-foreground mx-1" />
          <span className="font-bold text-muted-foreground">创建时间</span>
        </div>
        <span className="ml-1">
          {dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')}
        </span>
      </div>
      <div className="pt-4 flex gap-4">
        <div className="flex justify-center items-center">
          <CalendarIcon className="h-4 w-4 text-muted-foreground mx-1" />
          <span className="font-bold text-muted-foreground">更新时间</span>
        </div>
        <span className="ml-1">
          {dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')}
        </span>
      </div>
    </>
  )
}
