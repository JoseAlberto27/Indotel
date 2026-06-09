import { motion } from 'framer-motion'
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from 'react-icons/fi'
import useInView from '../hooks/useInView'

const contactInfo = [
  {
    icon: <FiMail className="text-2xl" />,
    label: 'Email',
    value: 'tu-email@ejemplo.com',
    link: 'mailto:tu-email@ejemplo.com',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <FiGithub className="text-2xl" />,
    label: 'GitHub',
    value: '@tu-usuario',
    link: 'https://github.com/tu-usuario',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: <FiLinkedin className="text-2xl" />,
    label: 'LinkedIn',
    value: 'tu-perfil',
    link: 'https://linkedin.com/in/tu-perfil',
    color: 'from-cyan-500 to-cyan-600',
  },
]

const socialLinks = [
  {
    icon: <FiTwitter className="text-2xl" />,
    link: 'https://twitter.com/tu-usuario',
    label: 'Twitter',
  },
  {
    icon: <FiInstagram className="text-2xl" />,
    link: 'https://instagram.com/tu-usuario',
    label: 'Instagram',
  },
  {
    icon: <FiGithub className="text-2xl" />,
    link: 'https://github.com/tu-usuario',
    label: 'GitHub',
  },
]

const Contact = () => {
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
      id="contacto"
      ref={ref}
      className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 flex items-center"
    >
      <motion.div
        className="max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="gradient-text">Conectemos</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-4">
            Estoy abierto a colaboraciones y oportunidades
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info) => (
            <motion.a
              key={info.label}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass p-8 rounded-2xl backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 text-center group"
            >
              <motion.div
                className={`text-4xl mb-4 bg-gradient-to-r ${info.color} bg-clip-text text-transparent`}
                whileHover={{ scale: 1.2 }}
              >
                {info.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">{info.label}</h3>
              <p className="text-white/60 group-hover:text-white/80 transition-colors">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="glass p-8 sm:p-12 rounded-2xl backdrop-blur-md border border-white/10 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Sígueme en Redes Sociales</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="text-3xl text-white/60 hover:text-white hover:glow transition-all duration-300"
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <p className="text-lg sm:text-xl text-white/50 italic">
            "¡Transformemos juntos el futuro a través de la tecnología!"
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
