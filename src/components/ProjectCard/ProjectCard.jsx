import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BsGithub, BsArrowRight, BsCheckCircle, BsBoxArrowUpRight } from 'react-icons/bs'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="relative overflow-hidden group glass rounded-3xl hover-lift"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium border rounded-full bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
            <BsCheckCircle className="inline w-3 h-3 mr-1" />
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <span className="text-xs font-medium tracking-wider uppercase text-primary-500">
          {project.category}
        </span>
        <h3 className="mt-2 mb-3 text-xl font-bold transition-colors font-display text-slate-900 dark:text-white group-hover:text-primary-500">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-stretch gap-2 flex-wrap">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 whitespace-nowrap min-h-[42px]"
            onClick={(e) => e.stopPropagation()}
          >
            <BsGithub className="w-4 h-4" />
            GitHub
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-xl bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 whitespace-nowrap min-h-[42px]"
              onClick={(e) => e.stopPropagation()}
            >
              <BsBoxArrowUpRight className="w-4 h-4" />
              Live Demo
            </a>
          )}
          
          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 hover:shadow-lg hover:shadow-primary-500/25 whitespace-nowrap min-h-[42px]"
          >
            Case Study
            <BsArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
