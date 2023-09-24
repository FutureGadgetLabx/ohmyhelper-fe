import { useContext } from 'react'
import { RootStoreContext } from '@/store'

const useStores = () => useContext(RootStoreContext)
export default useStores
