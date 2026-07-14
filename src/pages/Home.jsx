import { motion } from 'framer-motion'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Skills from '../components/Skills/Skills'
import Experience from '../components/Experience/Experience'
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects'
import Testimonials from '../components/Testimonials/Testimonials'
import Contact from '../components/Contact/Contact'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:via-dark/50 pointer-events-none" />
        <About />
      </div>
      <Services />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent pointer-events-none" />
        <Skills />
      </div>
      <Experience />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-500/5 to-transparent pointer-events-none" />
        <FeaturedProjects />
      </div>
      <Testimonials />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent pointer-events-none" />
        <Contact />
      </div>
    </motion.div>
  )
}
