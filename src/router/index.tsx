import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '@/pages/Login'
import SignUp from '@/pages/SignUp'
import { Home } from '@/pages/Home.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/home',
    element: <Home />,
  },
])

export default router
