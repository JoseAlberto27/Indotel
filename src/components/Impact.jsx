import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FiNavigation, FiUsers, FiZap } from 'react-icons/fi'
import useInView from '../hooks/useInView'

const Counter = ({ end, duration = 2.5 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return undefined

    let current = 0
    const increment = end / (duration * 60)
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

const impactMetrics = [
  {
    number: 1000,
    label: 'Jóvenes inspirados',
    icon: <FiUsers />,
    suffix: '+',
  },
  {
    number: 100,
    label: 'Proyectos innovadores',
    icon: <FiZap />,
    suffix: '+',
  },
  {
    number: 1,
    label: 'Visión para transformar el futuro',
    icon: <FiNavigation />,
    suffix: '',
  },
]

const Impact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="impacto"
      ref={ref}
      className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 flex items-center"
    >
      <motion.div
        className="max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="gradient-text">Impacto que Quiero Generar</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-4">
            Métricas y objetivos visuales
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactMetrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(59, 130, 246, 0.4)' }}
              className="glass p-8 sm:p-12 rounded-2xl backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 text-center"
            >
              <motion.div
                className="text-6xl sm:text-7xl mb-4 flex justify-center text-cyan-300"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {metric.icon}
              </motion.div>
              <motion.div className="text-4xl sm:text-5xl font-black gradient-text mb-4">
                {metric.suffix}
                <Counter end={metric.number} />
              </motion.div>
              <p className="text-lg sm:text-xl text-white/70">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 glass p-8 sm:p-12 rounded-2xl backdrop-blur-md border border-white/10"
        >
          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            Mi objetivo es crear un legado de innovación y transformación. A través de la tecnología,
            la educación y el emprendimiento, quiero contribuir a un futuro más brillante para
            las nuevas generaciones de Latinoamérica.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Impact
