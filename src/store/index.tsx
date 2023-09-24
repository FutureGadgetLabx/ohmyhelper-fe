import AppStore from '@/store/AppStore.ts'
import { createContext, FC, PropsWithChildren } from 'react'

type TRootStore = {
  appStore: AppStore
}

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: PropsWithChildren<any>
}

export const RootStoreContext = createContext<TRootStore>(null!)

const stores: TRootStore = {
  appStore: new AppStore(),
}

const RootStore: FC<Props> = ({ children }: Props) => (
  <RootStoreContext.Provider value={stores}>
    {children}
  </RootStoreContext.Provider>
)

export default RootStore
