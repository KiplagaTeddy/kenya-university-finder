import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Homepage'
import UniversityDetailPage from './pages/UniDetailPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/university/:id" element={<UniversityDetailPage />} />
    </Routes>
  )
}

export default AppRoutes