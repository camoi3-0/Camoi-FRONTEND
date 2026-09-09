import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function CTA() {
  return (
    <section className="py-[var(--spacing-section-py)] bg-gradient-to-br from-accent-600 to-accent-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)',
        backgroundSize: '24px 24px',
      }} />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.06] blur-[150px] rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-800/40 blur-[100px] rounded-full"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-accent-900 via-white/[0.02] to-accent-900/0" />

      <Container size="md" className="text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight mb-5 leading-tight">
            Prêt à transformer votre avenir ?
          </h2>
          <p className="text-base md:text-lg text-accent-100/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Que vous souhaitiez développer vos compétences ou optimiser la gestion de votre
            entreprise, nous sommes là pour vous accompagner.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/services">
              <Button variant="primary" size="lg" icon={<ArrowRight size={16} />}>
                Découvrir nos services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" icon={<Phone size={16} />} className="border-white/25 text-white hover:bg-white hover:text-accent-700 hover:border-white/50">
                Nous contacter
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
