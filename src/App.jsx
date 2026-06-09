import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Vision from './components/Vision'
import Skills from './components/Skills'
import Impact from './components/Impact'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Mi', href: '#sobre-mi' },
  { label: 'Vision', href: '#vision' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="w-full min-h-screen bg-dark-900 overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(6,182,212,0.14),transparent_28%),radial-gradient(circle_at_78%_10%,rgba(59,130,246,0.12),transparent_24%),linear-gradient(180deg,#0a0e27_0%,#0f1428_48%,#0a0e27_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
      </div>

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass backdrop-blur-md py-3 border-b border-white/10'
            : 'py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <motion.a
            href="#inicio"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold gradient-text"
          >
            JAR
          </motion.a>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex gap-6"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-300 hover:gradient-text"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.nav>

      <div className="relative z-10">
        <Hero />
        <About />
        <Vision />
        <Skills />
        <Impact />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
