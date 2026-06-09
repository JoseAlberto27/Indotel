import { motion } from 'framer-motion'
import {
  FiCode,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiSmartphone,
} from 'react-icons/fi'
import useInView from '../hooks/useInView'

const skills = [
  {
    icon: <FiCode className="text-4xl" />,
    title: 'Desarrollo de Software',
    description: 'Lenguajes: Python, JavaScript, Java, C#',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <FiGlobe className="text-4xl" />,
    title: 'Desarrollo Web',
    description: 'React, Vue, Node.js, Express, Tailwind CSS',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: <FiSmartphone className="text-4xl" />,
    title: 'Aplicaciones Móviles',
    description: 'React Native, Flutter, Desarrollo Nativo',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: <FiDatabase className="text-4xl" />,
    title: 'Bases de Datos',
    description: 'SQL, MongoDB, PostgreSQL, Firebase',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: <FiCpu className="text-4xl" />,
    title: 'Inteligencia Artificial',
    description: 'Machine Learning, TensorFlow, Python',
    color: 'from-cyan-500 to-cyan-600',
  },
]

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
      id="habilidades"
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
            <span className="gradient-text">Habilidades STEM</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-4">
            Competencias tecnológicas desarrolladas
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative glass p-8 rounded-2xl backdrop-blur-md border border-white/10 group-hover:border-white/30 transition-all duration-300 h-full">
                <motion.div
                  className="text-5xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {skill.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                  {skill.description}
                </p>
                <motion.div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-gradient-to-r from-white to-transparent transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
