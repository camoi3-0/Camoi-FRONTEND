import { motion } from 'motion/react'
import { Container } from '@/components/ui/Container'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

interface PageHeroProps {
  label: string
  title: string
  description?: string
}

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-[calc(var(--spacing-navbar)+3.5rem)] pb-16 md:pb-20 bg-primary-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
      </div>
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-1/4 w-96 h-96 bg-accent-500 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-primary-500 blur-[100px] rounded-full"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-500/[0.02] to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-400 mb-4"
            >
              <span className="w-8 h-px bg-accent-400" />
              {label}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.1] mb-5"
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-base md:text-lg text-primary-400 max-w-xl leading-relaxed"
              >
                {description}
              </motion.p>
            )}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
