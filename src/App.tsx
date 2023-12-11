import { Route, Routes, useNavigate } from 'react-router-dom'
import { Home } from '@/pages/Home.tsx'
import { AppGallery } from '@/components/home/AppGallery.tsx'
import { AppDetailPage } from '@/components/app/AppDetailPage.tsx'
import Login from '@/pages/Login.tsx'
import { SignUp } from '@/pages/SignUp.tsx'
import { Toaster } from '@/components/ui/toaster.tsx'
import { NextUIProvider } from '@nextui-org/react'
import Settings from '@/components/app/Settings.tsx'
import Overview from "@/components/app/Overview.tsx";
import Comments from "@/components/app/Comments.tsx";

function App() {
  const navigate = useNavigate()
  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route index element={<AppGallery />} />
          <Route path="/apps/:id" element={<AppDetailPage />}>
            <Route path="overview" element={<Overview />} />
            <Route path="settings" element={<Settings />} />
            <Route path="comments" element={<Comments />} />
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </NextUIProvider>
  )
}

export default App
