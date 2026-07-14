import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import { services } from '../../data/services'
import {
  BsGlobe, BsCodeSquare, BsDatabase, BsRobot, BsShieldCheck,
  BsTools, BsArrowRepeat, BsLightbulb
} from 'react-icons/bs'

const iconMap = {
  BsGlobe, BsCodeSquare, BsDatabase, BsRobot, BsShieldCheck,
  BsTools, BsArrowRepeat, BsLightbulb
}

export default function Services() {
  const [ref, isInView] = useScrollAnimation(0.1)

  return (
    <section id="services" className="py-24 relative overflow-hidden">
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
              Services
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Premium Solutions for
              <br />
              <span className="gradient-text">Modern Businesses</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              From concept to deployment, I deliver comprehensive software solutions 
              tailored to your unique business needs.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || BsCodeSquare
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative glass rounded-2xl p-6 cursor-pointer overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-primary-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
