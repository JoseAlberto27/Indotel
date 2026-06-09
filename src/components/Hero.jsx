import { motion } from 'framer-motion'
import { FiArrowDown, FiPlayCircle } from 'react-icons/fi'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="inicio" className="min-h-screen w-full pt-24 pb-10 flex items-center justify-center overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
        >
          <span className="gradient-text-lg">Transformando Ideas</span>
          <br />
          <span className="text-white">en Soluciones para el Futuro</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-white/60 mb-8 max-w-3xl mx-auto"
        >
          Participación de José Alberto Ramírez en el Concurso STEM de INDOTEL
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="#vision"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg transition-all duration-300 glow"
          >
            Ver Mi Propuesta
          </motion.a>
          <motion.a
            href="#sobre-mi"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 sm:px-10 sm:py-4 glass text-white font-bold rounded-lg backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300"
          >
            Conocer Más
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative w-full aspect-video max-w-3xl mx-auto"
        >
          <div className="glass p-2 rounded-2xl glow-lg">
            <div className="relative w-full h-full bg-dark-800 rounded-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-center"
                >
                  <FiPlayCircle className="text-6xl mb-4 mx-auto text-cyan-300" />
                  <p className="text-white/70">Tu video irá aquí</p>
                  <p className="text-sm text-white/40 mt-2">Video de presentación del proyecto STEM</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-16"
        >
          <FiArrowDown className="text-2xl text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
