import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import { education, experiences } from '../../data/experience'
import { BsHeartFill, BsBullseye, BsLightbulbFill, BsBriefcase } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'
const coreValues = [
  { icon: BsHeartFill, title: 'Passion', desc: 'Deep love for crafting exceptional software' },
  { icon: BsBullseye, title: 'Precision', desc: 'Attention to every detail matters' },
  { icon: BsLightbulbFill, title: 'Innovation', desc: 'Always exploring new technologies' },
]

export default function About() {
  const [ref, isInView] = useScrollAnimation(0.1)

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={staggerContainer}
          className="space-y-20"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="mb-6 text-3xl font-bold font-display sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
              Crafting Digital Excellence
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              I'm a passionate full-stack developer with over 5 years of experience building 
              premium software solutions. I specialize in creating modern web applications that 
              combine beautiful design with robust functionality. My approach blends technical 
              expertise with creative problem-solving to deliver products that exceed expectations.
            </p>
          </motion.div>

          {/* Bio & Values Grid */}
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">My Story</h3>
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
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Core Values</h3>
              <div className="space-y-4">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 transition-colors bg-white border rounded-xl dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-primary-500/30"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">{value.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Career Timeline */}
          <div className="space-y-8">
            <motion.div variants={fadeInUp} className="text-center">
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Career Journey</h3>
            </motion.div>
            <div className="relative">
              <div className="absolute top-0 bottom-0 w-px left-4 md:left-1/2 bg-gradient-to-b from-primary-500 to-secondary-500 md:-translate-x-px" />
              <div className="space-y-8">
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
                        <div className="flex items-center gap-2 mb-2 md:justify-end">
                          <BsBriefcase className="w-4 h-4 text-primary-500" />
                          <span className="text-sm font-medium text-primary-500">{exp.period}</span>
                        </div>
                        <h4 className="mb-1 text-lg font-bold font-display text-slate-900 dark:text-white">
                          {exp.role}
                        </h4>
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
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <motion.div variants={fadeInUp} className="text-center">
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Education & Certifications</h3>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-3">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="p-6 glass rounded-2xl hover-lift"
                >
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500">
                    <FaGraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-primary-500">{edu.period}</span>
                  <h4 className="mt-1 mb-1 text-lg font-bold font-display text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">{edu.institution}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Career Goals */}
          <motion.div
            variants={fadeInUp}
            className="p-8 text-center glass rounded-3xl md:p-12 bg-gradient-to-br from-primary-500/5 to-secondary-500/5"
          >
            <h3 className="mb-4 text-2xl font-bold font-display md:text-3xl text-slate-900 dark:text-white">
              Career Goals
            </h3>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              I aim to become a leading expert in AI-powered web applications while building 
              a reputation for delivering premium software that transforms businesses. My goal 
              is to collaborate with innovative teams on projects that push technological boundaries 
              and create meaningful impact.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
