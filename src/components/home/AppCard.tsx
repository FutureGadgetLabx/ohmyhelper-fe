import { CalendarIcon, StarIcon } from '@radix-ui/react-icons'
import dayjs from 'dayjs'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Icons } from '@/components/icons.tsx'
import { AuthorHoverCard, AuthorProps } from '@/components/home/HoverCard.tsx'
import { Link } from 'react-router-dom'

interface AppCardProps {
  id: number
  name: string
  description: string
  updateTime: number
  author: AuthorProps
}

export const AppCard = (props: AppCardProps) => {
  const date = new Date(props.updateTime)
  const displayFormat = 'YYYY-MM-DD HH:mm'

  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_80px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <Link to={`/apps/${props.id}`}>
            <CardTitle className="hover:underline cursor-pointer">
              {props.name}
            </CardTitle>
          </Link>
          <CardDescription className="h-[60px] line-clamp-3">
            {props.description}
          </CardDescription>
        </div>
        <div>
          <Button variant="secondary" className="shadow-none">
            <StarIcon className="mr-2 h-4 w-4" />
            Star
          </Button>
          {/*<Separator orientation="vertical" className="h-[20px]" />*/}
          {/*<DropdownMenu>*/}
          {/*  <DropdownMenuTrigger asChild>*/}
          {/*    <Button variant="secondary" className="px-2 shadow-none">*/}
          {/*      <ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />*/}
          {/*    </Button>*/}
          {/*  </DropdownMenuTrigger>*/}
          {/*  <DropdownMenuContent*/}
          {/*    align="end"*/}
          {/*    alignOffset={-5}*/}
          {/*    className="w-[200px]"*/}
          {/*    forceMount*/}
          {/*  >*/}
          {/*    <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>*/}
          {/*    <DropdownMenuSeparator />*/}
          {/*    <DropdownMenuCheckboxItem checked>*/}
          {/*      Future Ideas*/}
          {/*    </DropdownMenuCheckboxItem>*/}
          {/*    <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>*/}
          {/*    <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>*/}
          {/*    <DropdownMenuSeparator />*/}
          {/*    <DropdownMenuItem>*/}
          {/*      <PlusIcon className="mr-2 h-4 w-4" /> Create List*/}
          {/*    </DropdownMenuItem>*/}
          {/*  </DropdownMenuContent>*/}
          {/*</DropdownMenu>*/}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-6 text-sm text-muted-foreground">
          <div className="flex items-center">
            {/*<CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />*/}
            <Icons.react className="mr-1 h-3 w-3" />
            TypeScript
          </div>
          <div className="flex items-center">
            <StarIcon className="mr-1 h-3 w-3" />
            20k
          </div>
          <div className="flex items-center">
            <CalendarIcon className="mr-1 h-3 w-3" />
            {dayjs(date).format(displayFormat)}
          </div>
          <div>
            <AuthorHoverCard {...props.author} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
