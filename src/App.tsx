import { Route, Routes, useNavigate } from 'react-router-dom'
import { Home } from '@/pages/Home.tsx'
import { AppGallery } from '@/components/home/AppGallery.tsx'
import { AppDetailPage } from '@/components/app/AppDetailPage.tsx'
import Login from '@/pages/Login.tsx'
import { SignUp } from '@/pages/SignUp.tsx'
import { Toaster } from '@/components/ui/toaster.tsx'
import { NextUIProvider } from '@nextui-org/react'

function App() {
  const navigate = useNavigate()
  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route index element={<AppGallery />} />
        </Route>
        <Route path="/apps" element={<Home />}>
          <Route path=":id" element={<AppDetailPage />} />
        </Route>
      </Routes>
      <Toaster />
    </NextUIProvider>
  )
}

export default App
