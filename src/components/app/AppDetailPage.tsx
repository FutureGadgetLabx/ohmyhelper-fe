import { Outlet, useParams } from 'react-router-dom'
import { AppDetailHead } from '@/components/app/AppDetailHead.tsx'
import { useEffect, useState } from 'react'
import { getApp } from '@/requests/app.ts'
import { useRecoilState } from 'recoil'
import { appDetailRecoilState } from '@/recoil/atom.ts'
import ErrorPage from '@/components/app/ErrorPage.tsx'
import { Spinner } from '@nextui-org/react'

export const AppDetailPage = () => {
  const { id } = useParams()
  const [app, setApp] = useRecoilState(appDetailRecoilState)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    const fetchApps = async () => {
      try {
        const response = await getApp(id)
        setApp(response.data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchApps()
  }, [])

  return (
    <>
      {isLoading ? (
        <Spinner
          size="lg"
          classNames={{
            base: 'flex justify-center items-center min-h-[500px]',
          }}
        />
      ) : app ? (
        <>
          <AppDetailHead />
          <Outlet />
        </>
      ) : (
        <ErrorPage />
      )}
    </>
  )
}
