import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BsArrowLeft, BsExclamationTriangle } from 'react-icons/bs'

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="pt-24 pb-16 min-h-screen flex items-center justify-center"
    >
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mx-auto mb-6">
          <BsExclamationTriangle className="w-12 h-12 text-white" />
        </div>
        <h1 className="font-display text-6xl font-bold text-slate-900 dark:text-white mb-4">
          404
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all hover:scale-105"
        >
          <BsArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </motion.div>
  )
}
