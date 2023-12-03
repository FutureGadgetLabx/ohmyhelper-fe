import { useParams } from 'react-router-dom'
import { AppDetailHead } from '@/components/app/AppDetailHead.tsx'
import UserTable from '@/components/app/usertable/UserTable.tsx'
import { createContext, useEffect, useState } from 'react'
import { AppDetail, getApp } from '@/requests/app.ts'

export const AppContext = createContext<AppDetail | undefined>(undefined)
export const AppDetailPage = () => {
  const { id } = useParams()
  const [app, setApp] = useState<AppDetail>()
  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await getApp(id)
        setApp(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchApps()
  }, [])
  return (
    <AppContext.Provider value={app}>
      <div className="container p-8">
        <AppDetailHead />
        <UserTable />
      </div>
    </AppContext.Provider>
  )
}
