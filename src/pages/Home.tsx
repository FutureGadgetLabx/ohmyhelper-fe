import { SiteHeader } from '@/components/home/SiteHeader.tsx'
import { AppCard } from '@/components/home/AppCard.tsx'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.tsx'
import { RocketIcon } from '@radix-ui/react-icons'

const AppList = [
  {
    name: '哔哩哔哩日常任务',
    description: '每日自动完成哔哩哔哩日常任务，如观看视频，分享视频，投币等。',
    updateTime: 1693296468235,
    author: {
      name: 'cruii',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      avatarFallback: 'CR',
      description:
        'The React Framework – created and maintained by @vercel.aaaaaaaaaaahhhhhhhhhhhhhhhhhhhhhh',
      createTime: 1693296504973,
    },
  },
  {
    name: '哔哩哔哩赛事竞猜',
    description:
      '每日自动完成哔哩哔哩电竞赛事竞猜，如LPL，KPL等，根据赔率投注。红红火火恍恍惚惚哈哈哈哈',
    updateTime: 1693296494979,
    author: {
      name: 'cruii',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      avatarFallback: 'CR',
      description: 'Oh My Helper Developer.',
      createTime: 1693296504973,
    },
  },
  {
    name: '哔哩哔哩风纪委员',
    description: '每日自动完成哔哩哔哩风纪委员众裁。',
    updateTime: 1693296504973,
    author: {
      name: 'cruii',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      avatarFallback: 'CR',
      description: 'Oh My Helper Developer.',
      createTime: 1693296504973,
    },
  },
  {
    name: '哔哩哔哩日常任务',
    description: '每日自动完成哔哩哔哩日常任务，如观看视频，分享视频，投币等。',
    updateTime: 1693296512973,
    author: {
      name: 'cruii',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      avatarFallback: 'CR',
      description: 'Oh My Helper Developer.',
      createTime: 1693296504973,
    },
  },
  {
    name: '哔哩哔哩日常任务',
    description: '每日自动完成哔哩哔哩日常任务，如观看视频，分享视频，投币等。',
    updateTime: 1693296521972,
    author: {
      name: 'cruii',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      avatarFallback: 'CR',
      description: 'Oh My Helper Developer.',
      createTime: 1693296504973,
    },
  },
]
export const Home = () => {
  return (
    <div className="flex flex-col h-full">
      <SiteHeader />
      <div className="flex-1">
        <div className="border-b h-full">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-4">
            <Alert>
              <RocketIcon className="h-4 w-4" />
              <AlertTitle>欢迎使用Oh My Helper!</AlertTitle>
              <AlertDescription>
                本站正在努力建设中，还处于测试阶段，功能会陆续完善。如果您有任何的建议或反馈，请联系
                <a className="underline" href="mailto:cruii811@gmail.com">
                  cruii811@gmail.com
                </a>
              </AlertDescription>
            </Alert>
          </div>
          <div className="container flex-1 items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
            {AppList.map(app => (
              <AppCard
                name={app.name}
                description={app.description}
                updateTime={app.updateTime}
                author={app.author}
              />
            ))}
          </div>
        </div>
      </div>
      <footer>
        <div className="py-2">这里是footer</div>
      </footer>
    </div>
  )
}
