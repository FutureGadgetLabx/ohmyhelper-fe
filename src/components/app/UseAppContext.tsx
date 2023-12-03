import { useContext } from 'react'
import { AppContext } from '@/components/app/AppDetailPage.tsx'
export const useAppContext = () => useContext(AppContext)
