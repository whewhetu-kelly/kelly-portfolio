import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import { skillCategories } from '../../data/skills'
import {
  FaReact, FaNodeJs, FaPython, FaPhp, FaGitAlt, FaDocker, FaAws,
  FaFigma, FaLinux, FaHtml5, FaJs, FaBootstrap, FaCss3Alt, FaGithub, FaJava,
} from 'react-icons/fa'
import {
  SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql,
  SiRedis, SiPrisma, SiFirebase, SiTensorflow, SiLangchain,
  SiScikitlearn, SiPandas, SiExpress, SiVercel, SiGnubash, SiFramer, SiMariadb, SiOpencv
} from 'react-icons/si'
import { BsWindowFullscreen, BsServer, BsPlug, BsDatabase, BsCode, BsRobot, BsGear, BsChatDotsFill, BsLink, BsStars, BsShieldLock,
BsFolder2Open,
BsDatabaseGear,
BsDiagram3,
BsDatabaseCheck,
BsCpu,
BsCameraVideo } from 'react-icons/bs'
import { VscCode } from 'react-icons/vsc'
const iconMap = {
  FaReact, FaNodeJs, FaPython, FaPhp, FaGitAlt, FaDocker, FaAws,
  FaFigma, FaLinux, FaHtml5, FaJs,
  SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql,
  SiRedis, SiPrisma, SiFirebase, SiTensorflow, BsStars, SiLangchain,
  SiScikitlearn, SiPandas, SiExpress, SiVercel, SiGnubash, SiFramer,
  BsWindowFullscreen, BsServer, BsDatabase, BsCode, BsRobot, BsGear, BsChatDotsFill, BsPlug, FaBootstrap, FaCss3Alt, FaGithub, FaJava,
SiMariadb, SiOpencv,
VscCode,
BsShieldLock, BsFolder2Open, BsDatabaseGear,
BsDiagram3, BsDatabaseCheck, BsCpu, BsCameraVideo
}

function SkillBar({ name, level, icon, delay }) {
  const [ref, isInView] = useScrollAnimation(0.3)
  const IconComponent = iconMap[icon] || BsCode

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="group"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-500/10 text-primary-500">
          <IconComponent className="w-4 h-4" />
        </div>
        <span className="flex-1 text-sm font-medium text-slate-900 dark:text-white">{name}</span>
        <span className="text-sm font-bold text-primary-500">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend')
  const [ref, isInView] = useScrollAnimation(0.1)
  const activeData = skillCategories.find(c => c.id === activeCategory)

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-4">
              Skills & Expertise
            </span>
            <h2 className="mb-6 text-3xl font-bold font-display sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
              Technologies I
              <span className="gradient-text"> Master</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              A comprehensive toolkit of modern technologies for building 
              world-class software solutions.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
            {skillCategories.map((category) => {
              const IconComponent = iconMap[category.icon] || BsCode
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/25'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-primary-500/30'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </button>
              )
            })}
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {activeData?.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="p-6 glass rounded-2xl hover-lift"
                >
                  <SkillBar
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    delay={index * 0.05}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
