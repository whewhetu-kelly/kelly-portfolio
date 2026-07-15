import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BsEnvelope, BsGithub, BsLinkedin, BsArrowRight, BsCheckCircle, BsGeoAlt, BsClock, BsWhatsapp } from 'react-icons/bs'
import { BsBriefcase } from 'react-icons/bs'

const contactLinks = [
  { icon: BsEnvelope, label: 'Email', value: 'whewhetukelly70@gmail.com', href: 'mailto:whewhetukelly70@gmail.com', color: 'from-red-500 to-pink-500' },
  { icon: BsGithub, label: 'GitHub', value: '@whewhetu-kelly', href: 'https://github.com/whewhetu-kelly', color: 'from-slate-700 to-slate-900' },
  { icon: BsLinkedin, label: 'LinkedIn', value: 'kelly-whewhetu', href: 'https://www.linkedin.com/in/kelly-whewhetu-66a541329', color: 'from-blue-600 to-blue-800' },
  { icon: BsBriefcase, label: 'Upwork', value: 'Top Rated', href: 'https://www.upwork.com/freelancers/~01cc93a11f52fbc3c7', color: 'from-green-500 to-emerald-600' },
  { icon: BsWhatsapp, label: 'WhatsApp', value: '+234 902 397 2454', href: 'https://wa.me/2349023972454?text=Hi%20Kelly%2C%20I%27d%20like%20to%20discuss%20a%20project', color: 'from-green-500 to-emerald-600' }

]

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
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
        setFormState({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
  }

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
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-4">
            Contact
          </span>
          <h1 className="mb-6 text-3xl font-bold font-display sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
            Let's Build Something
            <span className="gradient-text"> Great Together</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Have a project in mind? I'd love to hear about it. Let's discuss 
            how we can bring your vision to life.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="space-y-8 lg:col-span-2">
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

            <div className="p-6 space-y-4 glass rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10">
                  <BsGeoAlt className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                  <p className="font-medium text-slate-900 dark:text-white">Remote Worldwide</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-500/10">
                  <BsClock className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Availability</p>
                  <p className="font-medium text-slate-900 dark:text-white">Full-time & Freelance</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10">
                  <BsCheckCircle className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Status</p>
                  <p className="font-medium text-emerald-500">Available for new projects</p>
                </div>
              </div>
            </div>

            <div className="p-6 glass rounded-2xl bg-gradient-to-br from-primary-500/5 to-secondary-500/5">
              <h3 className="mb-2 text-xl font-bold font-display text-slate-900 dark:text-white">
                Response Time
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                I typically respond within 24 hours. For urgent inquiries, 
                please mention it in your message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 space-y-6 glass rounded-3xl">
              <h3 className="mb-2 text-xl font-bold font-display text-slate-900 dark:text-white">
                Send a Message
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
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
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 transition-all bg-white border rounded-xl dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500"
                  placeholder="Project inquiry"
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
                  rows={6}
                  className="w-full px-4 py-3 transition-all bg-white border resize-none rounded-xl dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500"
                  placeholder="Tell me about your project, timeline, and budget..."
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
                    Message Sent Successfully!
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
{error && (
                <p className="text-xs text-center text-red-500">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
