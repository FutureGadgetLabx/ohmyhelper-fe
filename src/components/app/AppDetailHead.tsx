import {
  ChatBubbleIcon,
  GearIcon,
  ReaderIcon,
  StarIcon,
} from '@radix-ui/react-icons'
import { Button, Tab, Tabs } from '@nextui-org/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { appDetailRecoilState } from '@/recoil/atom.ts'

export const AppDetailHead = () => {
  const [appDetail] = useRecoilState(appDetailRecoilState)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  return (
    <>
      <div className="flex justify-between items-center mb-4 border-b">
        <div>
          <div>
            <h1 className="scroll-m-20 text-xl font-bold tracking-tight">
              {appDetail?.name}
            </h1>
            <span className="text-muted-foreground text-xs">
              App ID: {appDetail?.appId}
            </span>
          </div>
          <Tabs
            selectedKey={pathname}
            aria-label="Tabs"
            color="primary"
            variant="underlined"
            size="md"
            classNames={{
              tabList: 'gap-6 w-full relative rounded-none p-0 border-divider',
              cursor: 'w-full',
              tab: 'max-w-fit px-0 h-12',
            }}
            onSelectionChange={selectedKey => {
              // 使用navigate来更新URL，不会导致页面刷新。这样，React Router会负责更新UI而不重新加载整个页面
              // 同时Tab中不使用  href
              navigate(selectedKey as string)
            }}
          >
            <Tab
              id={`/apps/${appDetail?.appId}/overview`}
              key={`/apps/${appDetail?.appId}/overview`}
              title={
                <div className="flex items-center space-x-2">
                  <ReaderIcon className="w-4 h-4" />
                  <span>概览</span>
                </div>
              }
            />
            <Tab
              id={`/apps/${appDetail?.appId}/settings`}
              key={`/apps/${appDetail?.appId}/settings`}
              title={
                <div className="flex items-center space-x-2">
                  <GearIcon className="w-4 h-4" />
                  <span>任务设置</span>
                </div>
              }
            />
            <Tab
              id={`/apps/${appDetail?.appId}/comments`}
              key={`/apps/${appDetail?.appId}/comments`}
              title={
                <div className="flex items-center space-x-2">
                  <ChatBubbleIcon className="w-4 h-4" />
                  <span>留言</span>
                </div>
              }
            />
          </Tabs>
        </div>
        <div>
          <Button variant="ghost" startContent={<StarIcon />}>
            Star
          </Button>
        </div>
      </div>
    </>
  )
}
