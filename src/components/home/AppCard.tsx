import { CalendarIcon, StarIcon } from '@radix-ui/react-icons'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Icons } from '@/components/icons.tsx'
import { AuthorHoverCard } from '@/components/home/HoverCard.tsx'
import { Link } from 'react-router-dom'
import { App } from '@/requests/app.ts'

dayjs.locale('zh-cn')
dayjs.extend(relativeTime)
export const AppCard = (app: App) => {
  const date = new Date(app.updatedAt)
  // const displayFormat = 'YYYY-MM-DD HH:mm'

  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_80px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <Link to={`/apps/${app.appId}/overview`}>
            <CardTitle className="hover:underline cursor-pointer">
              {app.name}
            </CardTitle>
          </Link>
          <CardDescription className="overflow-hidden line-clamp-3">
            {app.description}+{app.description}+{app.description}+
            {app.description}+{app.description}+{app.description}+
          </CardDescription>
        </div>
        <div>
          <Button variant="outline" className="shadow-none h-7">
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
        <div className="flex xl:space-x-4 space-x-6 text-sm text-muted-foreground">
          <div className="flex items-center">
            {Icons.language(app.language)}
            <span className="ml-1">{app.language}</span>
          </div>
          <div className="flex items-center justify-center">
            <StarIcon className="mr-1 h-4 w-4" />
            <span>{app.stars}</span>
          </div>
          <div className="flex items-center justify-center">
            <CalendarIcon className="mr-1 h-4 w-4" />
            {dayjs(date).fromNow()}
          </div>
          <div>
            <AuthorHoverCard
              author={app.author}
              authorAvatarUrl={app.authorAvatarUrl}
              createdAt={app.createdAt}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
