import UserTable from '@/components/app/UserTable.tsx'
import {ArchiveIcon, CalendarIcon, GitHubLogoIcon, PersonIcon} from "@radix-ui/react-icons";
import dayjs from "dayjs";
import {HoverCard, HoverCardContent, HoverCardTrigger} from '../ui/hover-card'
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {useRecoilState} from "recoil";
import {appDetailRecoilState} from "@/recoil/atom.ts";

export default function Overview() {
  const [appDetail] = useRecoilState(appDetailRecoilState)
  const displayFormat = 'YYYY-MM-DD HH:mm:ss'
  return (
    <div>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        {appDetail?.description}
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
                    <AvatarImage src={appDetail?.author?.avatarUrl} />
                    <AvatarFallback>
                      {appDetail?.author?.nickname.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="ml-1">{appDetail?.author?.nickname}</span>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src={appDetail?.author?.avatarUrl} />
                    <AvatarFallback>
                      {appDetail?.author?.nickname.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 w-56">
                    <h4 className="text-sm font-semibold">
                      {appDetail?.author?.nickname}
                    </h4>
                    <p className="text-sm line-clamp-2">
                      {appDetail?.author?.profile}
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
                      <span className="text-xs text-muted-foreground">
                        Joined{' '}
                        {dayjs(appDetail?.author?.createdAt).format(
                          displayFormat
                        )}
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
          <span className="ml-1 text-sm">{appDetail?.versions?.[0]}</span>
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
          {dayjs(appDetail?.createdAt).format('YYYY-MM-DD HH:mm:ss')}
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
          {dayjs(appDetail?.updatedAt).format('YYYY-MM-DD HH:mm:ss')}
        </span>
      </div>
      <UserTable />
    </div>
  )
}
