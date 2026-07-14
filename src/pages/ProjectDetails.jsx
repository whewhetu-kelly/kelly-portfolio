import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getProjectById } from '../data/projects'
import ProjectGallery from '../components/ProjectGallery/ProjectGallery'
import { BsGithub, BsArrowLeft, BsCheckCircle, BsLightbulb, BsExclamationTriangle, BsDiagram3, BsListCheck, BsLayers } from 'react-icons/bs'

export default function ProjectDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = getProjectById(id)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-primary-500 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BsLayers },
    { id: 'problem', label: 'Problem', icon: BsExclamationTriangle },
    { id: 'solution', label: 'Solution', icon: BsLightbulb },
    { id: 'architecture', label: 'Architecture', icon: BsDiagram3 },
    { id: 'features', label: 'Features', icon: BsListCheck },
  ]

  const tabContent = {
    overview: (
      <div className="space-y-6">
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">{project.description}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="glass rounded-xl p-4">
            <span className="text-sm text-slate-500 dark:text-slate-400">Category</span>
            <p className="font-semibold text-slate-900 dark:text-white">{project.category}</p>
          </div>
          <div className="glass rounded-xl p-4">
            <span className="text-sm text-slate-500 dark:text-slate-400">Status</span>
            <p className="font-semibold text-emerald-500 flex items-center gap-1">
              <BsCheckCircle className="w-4 h-4" />
              {project.status}
            </p>
          </div>
        </div>
      </div>
    ),
    problem: (
      <div className="space-y-6">
        <div className="glass rounded-2xl p-6 border-l-4 border-red-500">
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <BsExclamationTriangle className="w-5 h-5 text-red-500" />
            The Challenge
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{project.problem}</p>
        </div>
      </div>
    ),
    solution: (
      <div className="space-y-6">
        <div className="glass rounded-2xl p-6 border-l-4 border-emerald-500">
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <BsLightbulb className="w-5 h-5 text-emerald-500" />
            The Solution
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{project.solution}</p>
        </div>
      </div>
    ),
    architecture: (
      <div className="space-y-6">
        <div className="glass rounded-2xl p-6 border-l-4 border-primary-500">
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <BsDiagram3 className="w-5 h-5 text-primary-500" />
            System Architecture
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{project.architecture}</p>
        </div>
      </div>
    ),
    features: (
      <div className="space-y-6">
        <div className="glass rounded-2xl p-6">
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <BsListCheck className="w-5 h-5 text-primary-500" />
            Key Features
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50"
              >
                <BsCheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="pt-24 pb-16 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-primary-500 transition-colors mb-8"
        >
          <BsArrowLeft className="w-5 h-5" />
          Back to Projects
        </button>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden mb-8">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-medium border border-primary-500/30 mb-3">
              {project.category}
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-2">
              {project.title}
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl">
              {project.shortDescription}
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium border border-primary-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:scale-105 transition-transform"
          >
            <BsGithub className="w-5 h-5" />
            View on GitHub
          </a>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-12"
        >
          {tabContent[activeTab]}
        </motion.div>

        {/* Challenges */}
        <div className="glass rounded-2xl p-6 mb-12 border-l-4 border-amber-500">
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <BsExclamationTriangle className="w-5 h-5 text-amber-500" />
            Challenges & Solutions
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{project.challenges}</p>
        </div>

        {/* Screenshots */}
        <div className="mb-12">
          <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Project Screenshots
          </h3>
          <ProjectGallery screenshots={project.screenshots} />
        </div>

        {/* Next Project */}
        <div className="flex justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800">
          <Link
            to="/projects"
            className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-primary-500 transition-colors"
          >
            <BsArrowLeft className="w-5 h-5" />
            All Projects
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
