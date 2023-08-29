import { AppCard } from '@/components/home/AppCard.tsx'

const AppList = [
  {
    id: 10001,
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
    id: 10002,
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
    id: 10003,
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
    id: 10004,
    name: 'DNF蚊子腿',
    description: 'DNF各平台蚊子腿奖励',
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
    id: 10005,
    name: '米哈游APP签到',
    description: '每日自动完成米游社APP签到',
    updateTime: 1693296521972,
    author: {
      name: 'cruii',
      avatar: 'https://ui.shadcn.com/avatars/02.png',
      avatarFallback: 'CR',
      description: 'Oh My Helper Developer.',
      createTime: 1693296504973,
    },
  },
  {
    id: 10006,
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
  {
    id: 10007,
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
  {
    id: 10008,
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
export const AppGallery = () => {
  return (
    <>
      <div className="container flex-1 items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        {AppList.map(app => (
          <AppCard key={app.id} {...app} />
        ))}
      </div>
    </>
  )
}
