import { motion } from 'framer-motion'
import useInView from '../hooks/useInView'

const galleryItems = [
  {
    id: 1,
    title: 'Momento destacado 1',
    category: 'INDOTEL STEM',
    image: '/assets/gallery/gallery-01.png',
  },
  {
    id: 2,
    title: 'Momento destacado 2',
    category: 'Participación',
    image: '/assets/gallery/gallery-02.jpeg',
  },
  {
    id: 3,
    title: 'Momento destacado 3',
    category: 'Presentación',
    image: '/assets/gallery/gallery-03.jpeg',
  },
  {
    id: 4,
    title: 'Momento destacado 4',
    category: 'Proyecto',
    image: '/assets/gallery/gallery-04.jpeg',
  },
  {
    id: 5,
    title: 'Momento destacado 5',
    category: 'Innovación',
    image: '/assets/gallery/gallery-05.jpeg',
  },
  {
    id: 6,
    title: 'Momento destacado 6',
    category: 'Tecnología',
    image: '/assets/gallery/gallery-06.jpeg',
  },
  {
    id: 7,
    title: 'Momento destacado 7',
    category: 'Educación',
    image: '/assets/gallery/gallery-07.jpeg',
  },
  {
    id: 8,
    title: 'Momento destacado 8',
    category: 'Logro',
    image: '/assets/gallery/gallery-08.jpeg',
  },
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
        animate="visible"
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

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <motion.article
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass rounded-xl overflow-hidden backdrop-blur-md border border-white/10 group-hover:border-white/30 transition-all duration-300">
                <div className="relative aspect-[4/5] bg-dark-800 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.category}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/85 via-dark-900/10 to-transparent opacity-90" />
                  <div className="absolute left-0 right-0 bottom-0 p-4 text-left">
                    <p className="text-xs uppercase tracking-wide text-cyan-200/80">
                      {item.category}
                    </p>
                    <h3 className="mt-1 text-base font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Gallery
