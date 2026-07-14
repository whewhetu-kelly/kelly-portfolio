import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import { experiences } from '../../data/experience'
import { BsBriefcase } from 'react-icons/bs'

export default function Experience() {
  const [ref, isInView] = useScrollAnimation(0.1)

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/10 text-secondary-500 text-sm font-medium mb-4">
              Experience
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Professional
              <span className="gradient-text"> Journey</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              A track record of delivering exceptional results across diverse 
              industries and technologies.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500 md:-translate-x-px" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={fadeInUp}
                  className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    <div className={`glass rounded-2xl p-6 hover-lift ${index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'}`}>
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <BsBriefcase className="w-4 h-4 text-primary-500" />
                        <span className="text-sm text-primary-500 font-medium">{exp.period}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                        {exp.company} · {exp.location}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 border-2 border-white dark:border-dark -translate-x-2 mt-6 ring-4 ring-primary-500/20" />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
