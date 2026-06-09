import { motion } from 'framer-motion'
import { FiMonitor } from 'react-icons/fi'
import useInView from '../hooks/useInView'

const About = () => {
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
      id="sobre-mi"
      ref={ref}
      className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 flex items-center"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="gradient-text">Sobre Mí</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass p-8 sm:p-12 rounded-2xl backdrop-blur-md glow"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 flex items-center justify-center">
                <div className="w-full h-full bg-dark-900 rounded-full flex items-center justify-center text-6xl text-cyan-300">
                  <FiMonitor />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                José Alberto Ramírez
              </h3>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-4">
                Estudiante apasionado de Desarrollo y Administración de Aplicaciones Informáticas,
                con una visión clara de cómo la tecnología puede transformar el futuro. Soy un entusiasta
                de la programación, la innovación y el impacto social.
              </p>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">
                Mi objetivo es crear soluciones tecnológicas que resuelvan problemas reales y generen
                un impacto positivo en la sociedad. Creo en el poder de la educación, la innovación y
                el trabajo en equipo para alcanzar objetivos extraordinarios.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Innovador', 'Emprendedor', 'Visionario', 'Líder'].map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 glass-sm rounded-full text-sm sm:text-base font-semibold text-white/80 border border-white/20"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
