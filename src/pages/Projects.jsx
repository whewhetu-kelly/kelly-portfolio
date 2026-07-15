import { motion } from 'framer-motion'
import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { BsSearch, BsGrid, BsList } from 'react-icons/bs'

const categories = ['All', 'Artificial Intelligence', 'Cybersecurity', 'Web Application', 'Business', 'Education', 'Healthcare']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid')

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-4">
            Portfolio
          </span>
          <h1 className="mb-6 text-3xl font-bold font-display sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
            All
            <span className="gradient-text"> Projects</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A comprehensive collection of my work across various technologies and industries.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col items-center justify-between gap-4 mb-8 sm:flex-row">
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <BsSearch className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
            />
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2.5 rounded-xl transition-colors ${
                viewMode === 'grid'
                  ? 'bg-primary-500 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              <BsGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2.5 rounded-xl transition-colors ${
                viewMode === 'list'
                  ? 'bg-primary-500 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              <BsList className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-primary-500/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="mb-6 text-sm text-slate-500 dark:text-slate-500">
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
        </p>

        {/* Projects Grid/List */}
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-8' : 'space-y-6'}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-slate-500 dark:text-slate-500">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}
