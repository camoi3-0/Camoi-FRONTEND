import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import logo2 from '@/assets/logo-sombre.png'
import logo1 from '@/assets/logo-clair.png'

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Services', href: '/services' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(window.scrollY > 10)
  const location = useLocation()

  // Scroll handler throttlé via requestAnimationFrame + hystérésis
  // pour éviter le clignotement (glitch) autour du seuil et les
  // recalculs excessifs pendant le scroll.
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled((prev) => {
          const y = window.scrollY
          // Hystérésis : seuils différents pour entrer/sortir de l'état
          // "scrolled" afin d'éviter le toggle en boucle près de 10px.
          return prev ? y > 4 : y > 20
        })
        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 will-change-[backdrop-filter] ${scrolled
            ? 'bg-white/70 backdrop-blur-xl shadow-[var(--shadow-card)] border-b border-primary-100/50'
            : 'bg-gradient-to-b from-black/20 to-transparent'
          }`}
        style={{
          // Durées distinctes par propriété : le backdrop-filter (blur) est
          // beaucoup plus coûteux à animer en sortie qu'en entrée pour le
          // navigateur, on lui donne donc une durée courte pour éviter l'effet
          // de lenteur au retour en haut de page. Les couleurs/ombres restent
          // douces (300ms) car peu coûteuses dans les deux sens.
          transition:
            'background-color 300ms ease-out, box-shadow 300ms ease-out, border-color 300ms ease-out, backdrop-filter 120ms ease-out',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[4.5rem] lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative h-9 flex items-center">
                {/* logo1 : affiché en haut de page (non scrollé) */}
                <img
                  src={logo1}
                  alt="CAMOI"
                  className={`h-9 w-auto transition-opacity duration-300 ${scrolled ? 'opacity-0 absolute inset-0' : 'opacity-100'
                    }`}
                />
                {/* logo2 : affiché une fois la page scrollée */}
                <img
                  src={logo2}
                  alt="CAMOI"
                  className={`h-9 w-auto transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 absolute inset-0'
                    }`}
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative px-3.5 py-2.5 rounded-lg text-[13px] font-medium tracking-wide transition-all duration-200 ${isActive
                        ? scrolled
                          ? 'text-primary-900'
                          : 'text-white'
                        : scrolled
                          ? 'text-primary-500 hover:text-primary-900 hover:bg-primary-50/80'
                          : 'text-white/65 hover:text-white hover:bg-white/[0.08]'
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className={`absolute inset-x-1 bottom-0.5 h-[2px] rounded-full ${scrolled ? 'bg-primary-900' : 'bg-white'
                          }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-2">
              <Link
                to="/contact"
                className={`hidden lg:inline-flex items-center px-5 py-2 rounded-lg text-[13px] font-semibold tracking-wide transition-all duration-300 ${scrolled
                    ? 'bg-gradient-to-r from-primary-900 to-primary-800 text-white hover:from-primary-800 hover:to-primary-700 shadow-[var(--shadow-card)]'
                    : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/15 shadow-[var(--shadow-glass)]'
                  }`}
              >
                Nous contacter
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${scrolled
                    ? 'text-primary-900 hover:bg-primary-50'
                    : 'text-white hover:bg-white/10'
                  }`}
                aria-label="Menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-primary-950/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 h-20 border-b border-primary-100">
                <span className="text-base font-bold text-primary-900 tracking-tight">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2 rounded-lg text-primary-400 hover:text-primary-900 hover:bg-primary-50 transition-colors"
                  aria-label="Fermer"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="p-6 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link.href}
                      className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-all ${location.pathname === link.href
                          ? 'text-primary-900 bg-primary-50'
                          : 'text-primary-500 hover:text-primary-900 hover:bg-primary-50/60'
                        }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-5">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-primary-900 to-primary-800 text-white hover:from-primary-800 hover:to-primary-700 transition-all duration-300 shadow-[var(--shadow-card)]"
                  >
                    Nous contacter
                  </Link>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}