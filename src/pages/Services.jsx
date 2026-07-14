import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { services } from '../data/services'
import { Link } from 'react-router-dom'
import {
  BsGlobe, BsCodeSquare, BsDatabase, BsRobot, BsShieldCheck,
  BsTools, BsArrowRepeat, BsLightbulb, BsArrowRight, BsCheckCircle
} from 'react-icons/bs'

import webDevImg from '../assets/images/services/web-development.svg'
import customAppImg from '../assets/images/services/custom-app.svg'
import phpMysqlImg from '../assets/images/services/php-mysql.svg'
import aiSolutionsImg from '../assets/images/services/ai-solutions.svg'
import cybersecurityImg from '../assets/images/services/cybersecurity.svg'
import maintenanceImg from '../assets/images/services/maintenance.svg'
import modernizationImg from '../assets/images/services/modernization.svg'
import consultingImg from '../assets/images/services/consulting.svg'

const iconMap = {
  BsGlobe, BsCodeSquare, BsDatabase, BsRobot, BsShieldCheck,
  BsTools, BsArrowRepeat, BsLightbulb
}

const imageMap = {
  'business-websites': webDevImg,
  'web-applications': customAppImg,
  'php-mysql': phpMysqlImg,
  'ai-solutions': aiSolutionsImg,
  'cybersecurity': cybersecurityImg,
  'maintenance': maintenanceImg,
  'modernization': modernizationImg,
  'consulting': consultingImg
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
      className="min-h-screen pt-24 pb-16"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/10 text-secondary-500 text-sm font-medium mb-4">
            Services
          </span>
          <h1 className="mb-6 text-3xl font-bold font-display sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
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
                  <h2 className="mb-4 text-2xl font-bold font-display md:text-3xl text-slate-900 dark:text-white">
                    {service.title}
                  </h2>
                  <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>

                  {details && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-semibold tracking-wider uppercase text-slate-900 dark:text-white">
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
                        <h4 className="mb-3 text-sm font-semibold tracking-wider uppercase text-slate-900 dark:text-white">
                          Process
                        </h4>
                        <ul className="space-y-2">
                          {details.process.map((step, i) => (
                            <li key={step} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <span className="flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full bg-primary-500/10 text-primary-500 shrink-0">
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
                    className="inline-flex items-center gap-2 px-6 py-3 mt-6 font-semibold text-white transition-all rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105"
                  >
                    Get Started
                    <BsArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
  <div className={`glass rounded-3xl p-8 bg-gradient-to-br ${service.color} bg-opacity-5`}>
    <div className="flex items-center justify-center p-6 aspect-video rounded-2xl bg-slate-100 dark:bg-slate-800">
      <img
        src={imageMap[service.id]}
        alt={service.title}
        className="object-contain max-w-full max-h-full"
      />
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
          className="p-8 mt-20 text-center glass rounded-3xl md:p-12 bg-gradient-to-br from-primary-500/5 to-secondary-500/5"
        >
          <h2 className="mb-4 text-2xl font-bold font-display md:text-3xl text-slate-900 dark:text-white">
            Need a Custom Solution?
          </h2>
          <p className="max-w-xl mx-auto mb-6 text-slate-600 dark:text-slate-400">
            Every business is unique. Let's discuss your specific requirements 
            and build a solution that fits perfectly.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105"
          >
            Start a Conversation
            <BsArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
