import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { education, experiences } from '../data/experience'
import { Link } from 'react-router-dom'
import {
  BsBriefcase, BsHeartFill, BsBullseye, BsLightbulbFill,
  BsArrowRight, BsCode, BsGlobe, BsTrophy, BsPeople, BsClock
} from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'
const stats = [
  { icon: BsCode, value: '50+', label: 'Projects Completed' },
  { icon: BsGlobe, value: '30+', label: 'Happy Clients' },
  { icon: BsTrophy, value: '25+', label: 'Technologies' },
  { icon: BsPeople, value: '5+', label: 'Years Experience' },
]

const coreValues = [
  { icon: BsHeartFill, title: 'Passion', desc: 'Deep love for crafting exceptional software that makes a difference.' },
  { icon: BsBullseye, title: 'Precision', desc: 'Every detail matters. Pixel-perfect implementation and clean code.' },
  { icon: BsLightbulbFill, title: 'Innovation', desc: 'Always exploring new technologies and pushing boundaries.' },
  { icon: BsClock, title: 'Reliability', desc: 'Delivering on time, every time. Consistent quality you can trust.' },
]

export default function AboutPage() {
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
        {/* Hero */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-4">
            About Me
          </span>
          <h1 className="mb-6 text-3xl font-bold font-display sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white">
            Crafting Digital
            <span className="gradient-text"> Excellence</span>
          </h1>
          <p className="text-lg leading-relaxed md:text-xl text-slate-600 dark:text-slate-400">
            I'm a passionate full-stack developer with over 5 years of experience building 
            premium software solutions. I specialize in creating modern web applications that 
            combine beautiful design with robust functionality.
          </p>
        </div>

        {/* Stats */}
        <motion.div
          ref={ref}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-4 mb-20 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="p-6 text-center glass rounded-2xl hover-lift"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="mb-1 text-2xl font-bold font-display md:text-3xl text-slate-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio */}
        <div className="grid gap-12 mb-20 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-display md:text-3xl text-slate-900 dark:text-white">
              My Story
            </h2>
            <div className="space-y-4 leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                Starting as a self-taught developer, I quickly fell in love with the art of building 
                software that makes a difference. Over the years, I've had the privilege of working 
                with startups, agencies, and enterprise clients across diverse industries.
              </p>
              <p>
                My journey has taken me from simple landing pages to complex AI-powered applications, 
                cybersecurity tools, and real-time systems. Each project has been an opportunity to 
                learn, grow, and push the boundaries of what's possible on the web.
              </p>
              <p>
                Today, I focus on delivering high-quality, scalable solutions that help businesses 
                thrive in the digital landscape. I believe that great software is not just about code 
                — it's about understanding user needs, solving real problems, and creating experiences 
                that people love.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-display md:text-3xl text-slate-900 dark:text-white">
              Core Values
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="p-5 glass rounded-2xl hover-lift"
                >
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500">
                    <value.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="mb-1 font-bold font-display text-slate-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Goals */}
        <div className="p-8 mb-20 glass rounded-3xl md:p-12 bg-gradient-to-br from-primary-500/5 to-secondary-500/5">
          <h2 className="mb-4 text-2xl font-bold text-center font-display md:text-3xl text-slate-900 dark:text-white">
            Career Goals
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-center text-slate-600 dark:text-slate-400">
            I aim to become a leading expert in AI-powered web applications while building 
            a reputation for delivering premium software that transforms businesses. My goal 
            is to collaborate with innovative teams on projects that push technological boundaries 
            and create meaningful impact.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h2 className="mb-8 text-2xl font-bold text-center font-display md:text-3xl text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="relative">
            <div className="absolute top-0 bottom-0 w-px left-4 md:left-1/2 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500 md:-translate-x-px" />
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    <div className={`glass rounded-2xl p-6 hover-lift ${index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'}`}>
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <BsBriefcase className="w-4 h-4 text-primary-500" />
                        <span className="text-sm font-medium text-primary-500">{exp.period}</span>
                      </div>
                      <h3 className="mb-1 text-lg font-bold font-display text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
                        {exp.company} · {exp.location}
                      </p>
                      <p className="mb-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
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
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 border-2 border-white dark:border-dark -translate-x-1.5 mt-6 ring-4 ring-primary-500/20" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <h2 className="mb-8 text-2xl font-bold text-center font-display md:text-3xl text-slate-900 dark:text-white">
            Education & Certifications
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="p-6 glass rounded-2xl hover-lift"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500">
                  <FaGraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-primary-500">{edu.period}</span>
                <h3 className="mt-1 mb-1 text-lg font-bold font-display text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">{edu.institution}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105"
          >
            Let's Work Together
            <BsArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
