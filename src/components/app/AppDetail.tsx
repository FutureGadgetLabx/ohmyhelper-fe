import { useParams } from 'react-router-dom'
import { HeadDetails } from '@/components/app/HeadDetails.tsx'
import UserTable from '@/components/app/usertable/UserTable.tsx'

export const AppDetail = () => {
  const { id } = useParams()
  return (
    <>
      <div className="container p-8">
        <HeadDetails id={id} />
        <UserTable />
      </div>
    </>
  )
}
