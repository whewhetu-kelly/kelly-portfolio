import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { services } from '../data/services'
import { Link } from 'react-router-dom'
import {
  BsGlobe, BsCodeSquare, BsDatabase, BsRobot, BsShieldCheck,
  BsTools, BsArrowRepeat, BsLightbulb, BsArrowRight, BsCheckCircle
} from 'react-icons/bs'

const iconMap = {
  BsGlobe, BsCodeSquare, BsDatabase, BsRobot, BsShieldCheck,
  BsTools, BsArrowRepeat, BsLightbulb
}

const serviceDetails = {
  'business-websites': {
    features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'CMS Integration', 'Analytics Setup', 'Maintenance'],
    process: ['Discovery', 'Design', 'Development', 'Testing', 'Launch', 'Support']
  },
  'web-applications': {
    features: ['Custom Architecture', 'API Development', 'Database Design', 'Authentication', 'Real-time Features', 'Scalability'],
    process: ['Requirements', 'Architecture', 'Development', 'Testing', 'Deployment', 'Monitoring']
  },
  'php-mysql': {
    features: ['Custom CMS', 'E-commerce', 'API Integration', 'Database Optimization', 'Security Hardening', 'Legacy Support'],
    process: ['Analysis', 'Planning', 'Coding', 'Testing', 'Optimization', 'Handover']
  },
  'ai-solutions': {
    features: ['NLP Integration', 'Machine Learning', 'Chatbots', 'Data Analysis', 'Recommendation Systems', 'Automation'],
    process: ['Data Collection', 'Model Training', 'Integration', 'Testing', 'Deployment', 'Iteration']
  },
  'cybersecurity': {
    features: ['Vulnerability Scanning', 'Penetration Testing', 'Security Audits', 'Code Review', 'Compliance', 'Training'],
    process: ['Assessment', 'Analysis', 'Remediation', 'Verification', 'Reporting', 'Monitoring']
  },
  'maintenance': {
    features: ['Regular Updates', 'Performance Monitoring', 'Security Patches', 'Backup Management', 'Bug Fixes', 'Optimization'],
    process: ['Monitoring', 'Analysis', 'Updates', 'Testing', 'Deployment', 'Reporting']
  },
  'modernization': {
    features: ['Legacy Migration', 'Cloud Migration', 'Refactoring', 'Architecture Upgrade', 'API Modernization', 'DevOps Setup'],
    process: ['Audit', 'Planning', 'Migration', 'Testing', 'Cutover', 'Support']
  },
  'consulting': {
    features: ['Architecture Review', 'Tech Stack Selection', 'Performance Audit', 'Code Review', 'Best Practices', 'Training'],
    process: ['Discovery', 'Analysis', 'Recommendations', 'Implementation', 'Review', 'Knowledge Transfer']
  }
}

export default function ServicesPage() {
  const [ref, isInView] = useScrollAnimation(0.05)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="pt-24 pb-16 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/10 text-secondary-500 text-sm font-medium mb-4">
            Services
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Premium Services for
            <span className="gradient-text"> Your Business</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Comprehensive software solutions tailored to your unique needs. 
            From concept to deployment, I deliver excellence at every step.
          </p>
        </div>

        {/* Services Detail */}
        <motion.div
          ref={ref}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={staggerContainer}
          className="space-y-16"
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || BsCodeSquare
            const details = serviceDetails[service.id]

            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {details && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm uppercase tracking-wider">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {details.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <BsCheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm uppercase tracking-wider">
                          Process
                        </h4>
                        <ul className="space-y-2">
                          {details.process.map((step, i) => (
                            <li key={step} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <span className="w-5 h-5 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center text-xs font-bold shrink-0">
                                {i + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all hover:scale-105"
                  >
                    Get Started
                    <BsArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`glass rounded-3xl p-8 bg-gradient-to-br ${service.color} bg-opacity-5`}>
                    <div className="aspect-video rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <IconComponent className="w-24 h-24 text-slate-300 dark:text-slate-700" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 glass rounded-3xl p-8 md:p-12 text-center bg-gradient-to-br from-primary-500/5 to-secondary-500/5"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-xl mx-auto">
            Every business is unique. Let's discuss your specific requirements 
            and build a solution that fits perfectly.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all hover:scale-105"
          >
            Start a Conversation
            <BsArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
