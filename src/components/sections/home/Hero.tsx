import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import heroImage from '@/assets/3[1].png'

export function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-950">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        aria-hidden="true"
      />

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)',
        backgroundSize: '48px 48px',
      }} />

      {/* Gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-primary-900/30 to-primary-950/60" />

      {/* Enhanced accent blobs with animation */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.06, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-accent-500 blur-[180px] rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-[15%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-r from-accent-400 to-primary-400 blur-[160px] rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-cool-500 blur-[120px] rounded-full"
      />

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(34,197,94,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(59,130,246,0.2) 0%, transparent 50%), radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.1) 0%, transparent 50%)',
      }} />

      {/* Geometric decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 right-[15%] w-[320px] h-[320px] border border-white/[0.04] rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-1/3 left-[10%] w-[220px] h-[220px] border border-white/[0.04] rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 240, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[60%] right-[30%] w-[160px] h-[160px] border border-white/[0.03] rounded-full hidden lg:block"
      />

      {/* Content — offset for navbar */}
      <Container className="text-center pt-[calc(var(--spacing-navbar)+3.5rem)] pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <motion.span
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.08] text-white/70 text-xs font-medium tracking-wide mb-8 shadow-[var(--shadow-glass)]"
            >
              <span className="relative flex w-2 h-2">
                <motion.span
                  animate={{ scale: [1, 2, 2], opacity: [0.75, 0.35, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute inline-flex w-full h-full rounded-full bg-accent-400"
                />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-accent-400" />
              </span>
              Cabinet d'expertise comptable & Formation
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[2rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white tracking-tight leading-[1.08] mb-6 sm:mb-7"
          >
            Oser grandir, oser changer <br></br>{" "}
            <motion.span
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-accent-400 to-accent-500 bg-[length:200%_auto]"
            >
              Oser le DIGITAL
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[15px] sm:text-base md:text-lg text-primary-400 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed"
          >
            Expertise comptable, audit et conseil de stratégie d'entreprise.
            Nous accompagnons les entreprises et les dirigeants vers le succès.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact">
              <Button variant="secondary" size="lg" icon={<ArrowRight size={16} />}>
                Contacter nous
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-white/20 text-white/90 hover:bg-white/10 hover:text-white hover:border-white/40 backdrop-blur-sm">
                Nos services
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-white/25"
          >
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Défiler</span>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
