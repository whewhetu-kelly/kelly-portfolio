import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaReact, FaNodeJs, FaPython, FaPhp, FaDatabase, FaAws,
  FaDocker, FaGitAlt, FaJs, FaHtml5, FaCss3Alt
} from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql } from 'react-icons/si'
import { BsArrowDown, BsCodeSlash } from 'react-icons/bs'

const floatingIcons = [
  { Icon: FaReact, color: '#61DAFB', x: '10%', y: '20%', delay: 0 },
  { Icon: FaNodeJs, color: '#339933', x: '85%', y: '15%', delay: 1 },
  { Icon: FaPython, color: '#3776AB', x: '75%', y: '70%', delay: 2 },
  { Icon: FaPhp, color: '#777BB4', x: '15%', y: '65%', delay: 1.5 },
  { Icon: FaDatabase, color: '#336791', x: '90%', y: '50%', delay: 0.5 },
  { Icon: FaAws, color: '#FF9900', x: '5%', y: '45%', delay: 2.5 },
  { Icon: FaDocker, color: '#2496ED', x: '60%', y: '10%', delay: 1.2 },
  { Icon: FaGitAlt, color: '#F05032', x: '40%', y: '80%', delay: 0.8 },
  { Icon: SiTypescript, color: '#3178C6', x: '25%', y: '35%', delay: 1.8 },
  { Icon: SiTailwindcss, color: '#06B6D4', x: '70%', y: '35%', delay: 2.2 },
  { Icon: SiNextdotjs, color: '#000000', x: '50%', y: '60%', delay: 0.3 },
  { Icon: SiMongodb, color: '#47A248', x: '35%', y: '15%', delay: 1.6 },
  { Icon: SiPostgresql, color: '#4169E1', x: '80%', y: '85%', delay: 2.8 },
  { Icon: FaJs, color: '#F7DF1E', x: '45%', y: '25%', delay: 0.6 },
  { Icon: FaHtml5, color: '#E34F26', x: '20%', y: '80%', delay: 1.4 },
  { Icon: FaCss3Alt, color: '#1572B6', x: '65%', y: '75%', delay: 2 },
]

const stats = [
  { label: 'Projects Completed', value: 50, suffix: '+' },
  { label: 'Technologies', value: 25, suffix: '+' },
  { label: 'Happy Clients', value: 30, suffix: '+' },
  { label: 'Years Experience', value: 5, suffix: '+' },
]

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value])

  return <span>{count}{suffix}</span>
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-dark">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute opacity-10 dark:opacity-20"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: item.delay,
              ease: 'easeInOut',
            }}
          >
            <item.Icon className="w-8 h-8 md:w-12 md:h-12" style={{ color: item.color }} />
          </motion.div>
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 dark:bg-primary-500/20 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-8"
          >
            <BsCodeSlash className="w-4 h-4" />
            Available for freelance projects
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
            Full-Stack Web Developer
            <br />
            <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 bg-clip-text text-transparent">
              Building Premium Software
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I craft modern business websites, AI-powered solutions, and secure web applications 
            that drive results and delight users.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/contact"
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-lg shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Hire Me
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 rounded-2xl border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-lg hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-400 transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-4 sm:p-6"
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary-500 font-display">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-400"
          >
            <span className="text-xs font-medium">Scroll to explore</span>
            <BsArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
