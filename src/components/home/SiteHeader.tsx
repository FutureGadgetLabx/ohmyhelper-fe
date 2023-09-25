import { MainNav } from '@/components/home/MainNav'
import { ArrowRightIcon, BellIcon, StarIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button.tsx'
import { Link } from 'react-router-dom'
import { UserNav } from '@/components/home/UserNav.tsx'
import useStores from '@/store/UseStore.ts'

export function SiteHeader() {
  const {
    appStore: { user },
  } = useStores()

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="mr-4">
            <Button variant="ghost" className="rounded-full" size="icon">
              <StarIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="rounded-full" size="icon">
              <span className="relative inline-block">
                <BellIcon className="h-5 w-5" />
                <span className="absolute right-0 top-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
              </span>
            </Button>
          </div>
          {user ? (
            <UserNav />
          ) : (
            <Link
              to="/login"
              className="flex font-medium items-center tracking-tight"
            >
              登录
              <ArrowRightIcon className="font-bold" />
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
