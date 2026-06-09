import { motion } from 'framer-motion'
import { FiImage } from 'react-icons/fi'
import useInView from '../hooks/useInView'

const galleryItems = [
  { id: 1, title: 'Proyecto 1', category: 'Innovación' },
  { id: 2, title: 'Proyecto 2', category: 'Tecnología' },
  { id: 3, title: 'Proyecto 3', category: 'Educación' },
  { id: 4, title: 'Proyecto 4', category: 'Emprendimiento' },
  { id: 5, title: 'Proyecto 5', category: 'Desarrollo' },
  { id: 6, title: 'Proyecto 6', category: 'Innovación' },
]

const Gallery = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
      id="galeria"
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
            <span className="gradient-text">Galería</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-4">
            Proyectos y momentos destacados
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="cursor-pointer group"
            >
              <div className="glass rounded-xl overflow-hidden backdrop-blur-md border border-white/10 group-hover:border-white/30 transition-all duration-300 h-64">
                <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-cyan-900/20 flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    className="text-center z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiImage className="text-4xl mb-3 mx-auto text-cyan-300" />
                    <p className="text-lg font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-white/60 mt-2">{item.category}</p>
                  </motion.div>
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 glass p-8 sm:p-12 rounded-2xl backdrop-blur-md border border-white/10 text-center"
        >
          <p className="text-base sm:text-lg text-white/70">
            La galería se actualizará con tus proyectos, eventos y momentos destacados.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Gallery
