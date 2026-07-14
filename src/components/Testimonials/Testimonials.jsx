import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import { testimonials } from '../../data/testimonials'
import { BsStar, BsStarFill, BsChevronLeft, BsChevronRight, BsQuote } from 'react-icons/bs'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, isInView] = useScrollAnimation(0.1)

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const current = testimonials[currentIndex]

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/10 text-secondary-500 text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="mb-6 text-3xl font-bold font-display sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
              What Clients
              <span className="gradient-text"> Say</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Trusted by businesses worldwide to deliver exceptional results.
            </p>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div variants={fadeInUp} className="relative max-w-4xl mx-auto">
            <div className="relative p-8 glass rounded-3xl md:p-12">
              {/* Quote Icon */}
              <div className="absolute top-6 left-8 md:top-8 md:left-12">
                <BsQuote className="w-12 h-12 text-primary-500/20" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <BsStarFill
                        key={i}
                        className={`w-5 h-5 ${
                          i < current.rating ? 'text-amber-400' : 'text-slate-300 dark:text-slate-700'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="mb-8 text-lg italic leading-relaxed md:text-xl text-slate-700 dark:text-slate-300">
                    "{current.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="object-cover rounded-full w-14 h-14 ring-2 ring-primary-500/30"
                      loading="lazy"
                    />
                    <div className="text-left">
                      <h4 className="font-bold font-display text-slate-900 dark:text-white">
                        {current.name}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {current.role} 
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="flex items-center justify-center w-12 h-12 transition-colors rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary-500 hover:text-white"
                >
                  <BsChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? 'bg-primary-500 w-8'
                          : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="flex items-center justify-center w-12 h-12 transition-colors rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary-500 hover:text-white"
                >
                  <BsChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Mini Cards */}
          <motion.div variants={fadeInUp} className="grid max-w-3xl gap-4 mx-auto sm:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(i)}
                className={`glass rounded-xl p-4 text-left transition-all hover-lift ${
                  currentIndex === i ? 'ring-2 ring-primary-500/50' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="object-cover w-10 h-10 rounded-full"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{t.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.company}</p>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
