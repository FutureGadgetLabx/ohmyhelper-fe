import { SiteHeader } from '@/components/home/SiteHeader.tsx'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.tsx'
import { RocketIcon } from '@radix-ui/react-icons'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { getUser } from '@/request/User.ts'
import useStores from '@/store/UseStore.ts'

export const Home = () => {
  const {
    appStore,
    appStore: { user },
  } = useStores()

  useEffect(() => {
    ;(async () => {
      const u = localStorage.getItem('user')
      if (u) {
        const localUser = JSON.parse(u)
        if (!user && localUser) {
          const resp = await getUser({
            userID: localUser.userID,
          })
          appStore.setUser({ ...resp.data })
          console.log(resp.data)
        }
      }
    })()
  }, [])
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
                <a
                  className="font-medium underline underline-offset-4"
                  href="mailto:cruii811@gmail.com"
                >
                  cruii811@gmail.com
                </a>
              </AlertDescription>
            </Alert>
          </div>
          <Outlet />
        </div>
      </div>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{' '}
            <a
              href="https://github.com/Cruii"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Cruii
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}
