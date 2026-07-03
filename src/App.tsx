import { useCallback, useState } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import EmailModal from './components/EmailModal'
import Navbar from './components/Navbar'
import { EMAIL } from './data/site'
import AllProjects from './pages/AllProjects'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import { homeSectionPaths } from './utils/homeSections'

function App() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)

  const openEmailModal = useCallback(() => {
    setIsEmailModalOpen(true)
  }, [])

  const closeEmailModal = useCallback(() => {
    setIsEmailModalOpen(false)
  }, [])

  return (
    <HashRouter>
      <div className="site-shell">
        <Navbar />
        <Routes>
          {homeSectionPaths.map((path) => (
            <Route
              key={path}
              path={path}
              element={<Home onOpenEmail={openEmailModal} />}
            />
          ))}
          <Route
            path="/projects"
            element={<AllProjects onOpenEmail={openEmailModal} />}
          />
          <Route
            path="/projects/:slug"
            element={<ProjectDetail onOpenEmail={openEmailModal} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        {isEmailModalOpen ? (
          <EmailModal email={EMAIL} onClose={closeEmailModal} />
        ) : null}
      </div>
    </HashRouter>
  )
}

export default App
