import { CalendarIcon } from '@radix-ui/react-icons'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import dayjs from 'dayjs'

export interface AuthorProps {
  avatar: string
  avatarFallback: string
  name: string
  description: string
  createTime: number
}

export const AuthorHoverCard = (props: AuthorProps) => {
  const date = new Date(props.createTime)
  const displayFormat = 'MM YYYY'
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar className="h-6 w-6 cursor-pointer">
          <AvatarImage src={props.avatar} />
          <AvatarFallback>{props.avatarFallback}</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={props.avatar} />
            <AvatarFallback>{props.avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="space-y-1 w-56">
            <h4 className="text-sm font-semibold">{props.name}</h4>
            <p className="text-sm line-clamp-2">{props.description}</p>
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
  )
}
