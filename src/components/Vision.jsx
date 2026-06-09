import { motion } from 'framer-motion'
import {
  FiBook,
  FiGlobe,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from 'react-icons/fi'
import useInView from '../hooks/useInView'

const visionItems = [
  {
    icon: <FiBook className="text-2xl" />,
    title: 'Educación',
    description: 'Democratizar el acceso a la educación tecnológica de calidad',
  },
  {
    icon: <FiZap className="text-2xl" />,
    title: 'Innovación',
    description: 'Fomentar la creación de soluciones tecnológicas disruptivas',
  },
  {
    icon: <FiTrendingUp className="text-2xl" />,
    title: 'Emprendimiento',
    description: 'Inspirar y apoyar a jóvenes emprendedores tecnológicos',
  },
  {
    icon: <FiUsers className="text-2xl" />,
    title: 'Desarrollo Social',
    description: 'Crear impacto positivo en las comunidades',
  },
  {
    icon: <FiGlobe className="text-2xl" />,
    title: 'Transformación Digital',
    description: 'Liderar la transformación digital en Latinoamérica',
  },
]

const Vision = () => {
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
      id="vision"
      ref={ref}
      className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="gradient-text">Mi Visión</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-4">
            Cómo la tecnología puede impulsar el futuro
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visionItems.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)' }}
              className="glass p-8 rounded-xl backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer group"
            >
              <motion.div
                className="text-4xl mb-4 text-blue-400 group-hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Vision
