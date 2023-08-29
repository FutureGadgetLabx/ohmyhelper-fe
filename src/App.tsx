import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import { Home } from '@/pages/Home.tsx'
import { AppGallery } from '@/components/home/AppGallery.tsx'
import { AppDetail } from '@/components/app/AppDetail.tsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="apps" replace />} />
          <Route path="apps" element={<Home />}>
            <Route index element={<AppGallery />} />
            <Route path=":id" element={<AppDetail />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
