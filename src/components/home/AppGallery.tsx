import { AppCard } from '@/components/home/AppCard.tsx'
import { useEffect, useState } from 'react'
import { App, listApp } from '@/requests/app.ts'

export const AppGallery = () => {
  const [apps, setApps] = useState<App[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchApps = async () => {
      setLoading(true)
      try {
        const response = await listApp(1, 10)
        setApps(response.data.apps)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchApps()
  }, [])
  return (
    <div className="flex-1 items-start justify-center gap-4 rounded-lg py-6 md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {apps.map(app => (
        <AppCard key={app.appId} {...app} />
      ))}
    </div>
  )
}
