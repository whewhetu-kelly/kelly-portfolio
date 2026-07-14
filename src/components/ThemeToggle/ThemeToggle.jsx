import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BsSun, BsMoon } from 'react-icons/bs'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-8 left-8 z-50 w-12 h-12 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? <BsMoon className="w-5 h-5" /> : <BsSun className="w-5 h-5 text-amber-500" />}
      </motion.div>
    </motion.button>
  )
}
