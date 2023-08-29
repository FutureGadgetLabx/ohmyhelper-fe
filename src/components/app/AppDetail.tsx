import { useParams } from 'react-router-dom'
import { HeadDetails } from '@/components/app/Details.tsx'

export const AppDetail = () => {
  const { id } = useParams()
  return (
    <>
      <div className="container p-8">
        <HeadDetails id={id} />
      </div>
    </>
  )
}
