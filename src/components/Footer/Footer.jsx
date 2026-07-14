import { Link } from 'react-router-dom'
import { BsGithub, BsLinkedin, BsTwitter, BsEnvelope } from 'react-icons/bs'
import { motion } from 'framer-motion'

const socialLinks = [
  { icon: BsGithub, href: 'https://github.com/whewhetu-kelly', label: 'GitHub' },
  { icon: BsLinkedin, href: 'https://linkedin.com/in/whewhetu-kelly', label: 'LinkedIn' },
  { icon: BsTwitter, href: 'https://twitter.com/@kelly_sharpman', label: 'Twitter' },
  { icon: BsEnvelope, href: 'mailto:whewhetukelly70@email.com', label: 'Work Email' },
]

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-200 dark:border-slate-800 dark:bg-dark">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold font-display">
                <span className="text-slate-900 dark:text-white">Dev</span>
                <span className="text-primary-500">Portfolio</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Building premium software solutions for modern businesses. Full-stack development with a focus on quality and innovation.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 transition-colors rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold font-display text-slate-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold font-display text-slate-900 dark:text-white">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <BsEnvelope className="w-4 h-4 text-primary-500" />
                whewhetukelly70@gmail.com
              </li>
              <li>Available for freelance projects</li>
              <li>Remote worldwide</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-12 border-t border-slate-200 dark:border-slate-800 sm:flex-row">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} CodeByKelly. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500">
            Crafted with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  )
}
