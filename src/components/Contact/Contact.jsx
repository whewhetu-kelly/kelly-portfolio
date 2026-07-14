import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import { BsEnvelope, BsGithub, BsLinkedin, BsArrowRight, BsCheckCircle } from 'react-icons/bs'
import { BsBriefcase } from 'react-icons/bs'

const contactLinks = [
  { icon: BsEnvelope, label: 'Work Email', value: 'whewhetukelly70@email.com', href: 'mailto:whewhetukelly70@email.com', color: 'from-red-500 to-pink-500' },
  { icon: BsGithub, label: 'GitHub', value: '@whewhetu-kelly', href: 'https://github.com/whewhetu-kelly', color: 'from-slate-700 to-slate-900' },
  { icon: BsLinkedin, label: 'LinkedIn', value: 'Whewhetu Kelly', href: 'https://linkedin.com/kelly-whewhetu', color: 'from-blue-600 to-blue-800' },
  { icon: BsBriefcase, label: 'Upwork', value: 'Top Rated', href: 'https://upwork.com', color: 'from-green-500 to-emerald-600' },
]

export default function Contact() {
  const [ref, isInView] = useScrollAnimation(0.1)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try {
      const res = await fetch('https://formspree.io/f/xgogvzqk', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: JSON.stringify(formState)
      })
      if (res.ok) {
        setSubmitted(true)
        setFormState({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
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
              Get in Touch
            </span>
            <h2 className="mb-6 text-3xl font-bold font-display sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
              Let's Build Something
              <span className="gradient-text"> Great Together</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Have a project in mind? I'd love to hear about it. Let's discuss 
              how we can bring your vision to life.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 group rounded-2xl glass hover-lift"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500 dark:text-slate-400">{link.label}</p>
                      <p className="font-semibold transition-colors text-slate-900 dark:text-white group-hover:text-primary-500">
                        {link.value}
                      </p>
                    </div>
                    <BsArrowRight className="w-5 h-5 transition-all text-slate-400 group-hover:text-primary-500 group-hover:translate-x-1" />
                  </a>
                ))}
              </div>

              {/* CTA Box */}
              <div className="p-6 glass rounded-2xl bg-gradient-to-br from-primary-500/5 to-secondary-500/5">
                <h3 className="mb-2 text-xl font-bold font-display text-slate-900 dark:text-white">
                  Ready to Start?
                </h3>
                <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                  I'm currently available for new projects. Let's create something amazing together.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-emerald-500">
                  <BsCheckCircle className="w-4 h-4" />
                  Available for freelance work
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <form onSubmit={handleSubmit} className="p-8 space-y-6 glass rounded-3xl">
                <h3 className="mb-2 text-xl font-bold font-display text-slate-900 dark:text-white">
                  Send a Message
                </h3>

                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 transition-all bg-white border rounded-xl dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 transition-all bg-white border rounded-xl dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500"
                    placeholder="whewhetukelly70@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 transition-all bg-white border resize-none rounded-xl dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] ${
                    submitted
                      ? 'bg-emerald-500'
                      : 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:shadow-lg hover:shadow-primary-500/25'
                  }`}
                >
                  {submitted ? (
                    <span className="flex items-center justify-center gap-2">
                      <BsCheckCircle className="w-5 h-5" />
                      Message Sent!
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
