import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import BackToTop from './components/BackToTop/BackToTop'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import CursorEffects from './components/CursorEffects/CursorEffects'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import { useEffect } from 'react'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation()

  useEffect(() => {
    const resetScroll = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
    resetScroll()
    const timeout = setTimeout(resetScroll, 100)
    return () => clearTimeout(timeout)
  }, [location.pathname])
  
  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 dark:bg-dark text-slate-900 dark:text-slate-100">
      <CursorEffects />
      <ScrollProgress />
      <Navbar />
      <ThemeToggle />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <BackToTop />
      <Footer />
    </div>
  )
}

export default App
