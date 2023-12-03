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
import { useAppContext } from '@/components/app/UseAppContext.tsx'

export const AppDetailHead = () => {
  const app = useAppContext()
  const displayFormat = 'MM YYYY'
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        {app?.name}
      </h1>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        {app?.description}
      </blockquote>
      <div className="pt-4 flex gap-4">
        <div className="flex gap-4 items-center">
          <div className="flex justify-center items-center">
            <PersonIcon className="h-4 w-4 text-muted-foreground mx-1" />
            <span className="font-bold text-xs text-muted-foreground">
              作者
            </span>
          </div>
          <div className="underline cursor-pointer underline-offset-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="flex">
                  <Avatar className="h-6 w-6 cursor-pointer">
                    <AvatarImage src={app?.author?.avatarUrl} />
                    <AvatarFallback>
                      {app?.author?.nickname.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="ml-1">{app?.author?.nickname}</span>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src={app?.author?.avatarUrl} />
                    <AvatarFallback>
                      {app?.author?.nickname.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 w-56">
                    <h4 className="text-sm font-semibold">
                      {app?.author?.nickname}
                    </h4>
                    <p className="text-sm line-clamp-2">
                      {app?.author?.profile}
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
                      <span className="text-xs text-muted-foreground">
                        Joined{' '}
                        {dayjs(app?.author?.createdAt).format(displayFormat)}
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex justify-center items-center">
            <ArchiveIcon className="h-4 w-4 text-muted-foreground mx-1" />
            <span className="font-bold text-xs text-muted-foreground">
              最新版本
            </span>
          </div>
          <span className="ml-1 text-sm">{app?.versions?.[0]}</span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex justify-center items-center">
            <GitHubLogoIcon className="h-4 w-4 text-muted-foreground mx-1" />
            <span className="font-bold text-xs text-muted-foreground">
              开源地址
            </span>
          </div>
          <span className="ml-1 text-sm underline cursor-pointer">
            https://github.com/ohmyhelper/ohmyhelper-bilibili
          </span>
        </div>
      </div>
      <div className="pt-4 flex gap-4 items-center">
        <div className="flex justify-center items-center">
          <CalendarIcon className="h-4 w-4 text-muted-foreground mx-1" />
          <span className="font-bold text-xs text-muted-foreground">
            发布时间
          </span>
        </div>
        <span className="ml-1 text-sm">
          {dayjs(app?.createdAt).format('YYYY-MM-DD HH:mm:ss')}
        </span>
      </div>
      <div className="pt-4 flex gap-4 items-center">
        <div className="flex justify-center items-center">
          <CalendarIcon className="h-4 w-4 text-muted-foreground mx-1" />
          <span className="font-bold text-xs text-muted-foreground">
            更新时间
          </span>
        </div>
        <span className="ml-1 text-sm">
          {dayjs(app?.updatedAt).format('YYYY-MM-DD HH:mm:ss')}
        </span>
      </div>
    </>
  )
}
